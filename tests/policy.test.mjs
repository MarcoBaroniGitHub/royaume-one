import test from 'node:test';
import assert from 'node:assert/strict';
import { authorize, authorizeDerived } from '../packages/core/policy.mjs';

function fixture() {
  const principal = { id: 'agent-1', kind: 'agent', workspaceId: 'org-a', projectId: 'project-a' };
  const resource = { id: 'prototype', workspaceId: 'org-a', projectId: 'project-a', classification: 'internal',
    agentsAllowed: true, externalAllowed: false, publicationAllowed: false,
    allowedPurposes: ['development'], destinations: [] };
  const request = { principal, resource, operation: 'read', purpose: 'development', destination: 'internal', now: 1000 };
  const grant = { principalId: 'agent-1', workspaceId: 'org-a', projectId: 'project-a', resourceIds: ['prototype'],
    operations: ['read', 'export', 'publish'], purposes: ['development', 'recruitment'],
    destinations: ['internal', 'recruiter:example', 'public:website'], revoked: false, expiresAt: 2000 };
  return { request, grant };
}

test('an agent can use a locked prototype for internal development', () => {
  const { request, grant } = fixture(); assert.equal(authorize(request, [grant]).allowed, true);
});
test('the same prototype is excluded from recruitment context', () => {
  const { request, grant } = fixture(); request.purpose = 'recruitment';
  assert.equal(authorize(request, [grant]).reason, 'purpose-denied');
});
test('read permission never implies export permission', () => {
  const { request, grant } = fixture(); request.operation = 'export'; request.destination = 'recruiter:example';
  assert.equal(authorize(request, [grant]).reason, 'external-locked');
});
test('explicitly approved external example can be exported to its exact audience', () => {
  const { request, grant } = fixture(); Object.assign(request.resource, { externalAllowed: true, destinations: ['recruiter:example'] });
  request.operation = 'export'; request.destination = 'recruiter:example';
  assert.equal(authorize(request, [grant]).allowed, true);
});
test('external approval cannot widen the destinations in the host grant', () => {
  const { request, grant } = fixture(); Object.assign(request.resource, { externalAllowed: true, destinations: ['unknown'] });
  request.operation = 'export'; request.destination = 'unknown';
  assert.equal(authorize(request, [grant]).reason, 'no-current-grant');
});
test('public classification alone confers no right', () => {
  const { request } = fixture(); request.resource.classification = 'public';
  assert.equal(authorize(request, []).allowed, false);
});
for (const [label, mutate, reason] of [
  ['other organization', r => r.principal.workspaceId = 'org-b', 'outside-scope'],
  ['other project', r => r.principal.projectId = 'project-b', 'outside-scope'],
  ['agents disabled', r => r.resource.agentsAllowed = false, 'agents-locked'],
  ['secret in prompt', r => r.resource.classification = 'secret', 'secret-requires-broker'],
  ['unknown operation', r => r.operation = 'send-everything', 'invalid-request'],
  ['missing clock', r => delete r.now, 'invalid-request'],
  ['unknown classification', r => r.resource.classification = 'other', 'invalid-resource'],
  ['missing source metadata', r => delete r.resource.agentsAllowed, 'invalid-resource'],
  ['read with external destination', r => r.destination = 'recruiter:example', 'invalid-destination'],
]) test(label, () => {
  const { request, grant } = fixture(); mutate(request); assert.equal(authorize(request, [grant]).reason, reason);
});
for (const [label, mutate] of [
  ['expired grant', g => g.expiresAt = 999], ['expiry boundary', g => g.expiresAt = 1000],
  ['revoked grant on next request', g => g.revoked = true], ['other identity', g => g.principalId = 'agent-2'],
  ['missing operations', g => g.operations = []], ['missing grant expiry', g => delete g.expiresAt],
]) test(label, () => {
  const { request, grant } = fixture(); mutate(grant); assert.equal(authorize(request, [grant]).reason, 'no-current-grant');
});
test('export approval does not authorize publication of internal material', () => {
  const { request, grant } = fixture(); Object.assign(request.resource, { externalAllowed: true, publicationAllowed: true, destinations: ['public:website'] });
  request.operation = 'publish'; request.destination = 'public:website';
  assert.equal(authorize(request, [grant]).reason, 'publication-locked');
});
test('public, explicitly approved material can be published', () => {
  const { request, grant } = fixture(); Object.assign(request.resource, { classification: 'public', externalAllowed: true, publicationAllowed: true, destinations: ['public:website'] });
  request.operation = 'publish'; request.destination = 'public:website';
  assert.equal(authorize(request, [grant]).allowed, true);
});
test('a summary of allowed and locked sources remains locked for external export', () => {
  const { request, grant } = fixture(); const approved = structuredClone(request.resource);
  approved.externalAllowed = true; approved.destinations = ['recruiter:example'];
  request.operation = 'export'; request.destination = 'recruiter:example';
  assert.equal(authorizeDerived(request, [approved, request.resource], [grant]).reason, 'external-locked');
});
test('a derived resource requires lineage', () => {
  const { request, grant } = fixture(); assert.equal(authorizeDerived(request, [], [grant]).reason, 'missing-lineage');
});
test('all allowed sources permit a derived internal use', () => {
  const { request, grant } = fixture(); assert.equal(authorizeDerived(request, [request.resource], [grant]).allowed, true);
});
test('malformed requests and grants fail closed', () => {
  assert.equal(authorize(null, []).allowed, false);
  const { request } = fixture(); assert.equal(authorize(request, null).allowed, false);
  assert.equal(authorize(request, [null, {}]).allowed, false);
});
