// Copyright 2026 Marco Baroni and the Royaume ONE contributors.
// SPDX-License-Identifier: Apache-2.0

// Experimental decision function. All identities, resources and grants must come
// from a trusted host. This module is not authentication or plugin isolation.
const OPERATIONS = new Set(['read', 'export', 'publish']);
const CLASSIFICATIONS = new Set(['public', 'internal', 'restricted', 'secret']);
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const list = value => Array.isArray(value) && value.length > 0 && value.every(nonempty);
const deny = reason => ({ allowed: false, reason });

export function authorize(request, grants = []) {
  if (!request || !Array.isArray(grants)) return deny('invalid-request');
  const { principal, resource, operation, purpose, destination, now } = request;
  if (!principal || !nonempty(principal.id) || !['agent', 'human'].includes(principal.kind)
    || !nonempty(principal.workspaceId) || !nonempty(principal.projectId)
    || !OPERATIONS.has(operation) || !nonempty(purpose)
    || !Number.isFinite(now) || !nonempty(destination)) return deny('invalid-request');
  if (!resource || !nonempty(resource.id) || !nonempty(resource.workspaceId)
    || !nonempty(resource.projectId) || !CLASSIFICATIONS.has(resource.classification)
    || !list(resource.allowedPurposes) || typeof resource.agentsAllowed !== 'boolean'
    || typeof resource.externalAllowed !== 'boolean'
    || typeof resource.publicationAllowed !== 'boolean'
    || !Array.isArray(resource.destinations) || !resource.destinations.every(nonempty)) {
    return deny('invalid-resource');
  }
  if (resource.workspaceId !== principal.workspaceId || resource.projectId !== principal.projectId) {
    return deny('outside-scope');
  }
  if (resource.classification === 'secret') return deny('secret-requires-broker');
  if (principal.kind === 'agent' && !resource.agentsAllowed) return deny('agents-locked');
  if (!resource.allowedPurposes.includes(purpose)) return deny('purpose-denied');
  if (operation === 'read' && destination !== 'internal') return deny('invalid-destination');
  if (operation !== 'read') {
    if (!resource.externalAllowed || !resource.destinations.includes(destination)
      || destination === 'internal') return deny('external-locked');
    if (operation === 'publish'
      && (!resource.publicationAllowed || resource.classification !== 'public')) return deny('publication-locked');
  }
  const granted = grants.some(g => g && g.principalId === principal.id
    && g.workspaceId === resource.workspaceId && g.projectId === resource.projectId
    && list(g.resourceIds) && g.resourceIds.includes(resource.id)
    && list(g.operations) && g.operations.includes(operation)
    && list(g.purposes) && g.purposes.includes(purpose)
    && list(g.destinations) && g.destinations.includes(destination)
    && g.revoked === false && Number.isFinite(g.expiresAt) && g.expiresAt > now);
  return granted ? { allowed: true, reason: 'explicit-grant' } : deny('no-current-grant');
}

// For derived material, the trusted host resolves its complete source lineage.
// Checking every source prevents a summary from laundering a restricted source.
export function authorizeDerived(request, sources, grants) {
  if (!Array.isArray(sources) || sources.length === 0) return deny('missing-lineage');
  for (const source of sources) {
    const result = authorize({ ...request, resource: source }, grants);
    if (!result.allowed) return result;
  }
  return { allowed: true, reason: 'all-sources-authorized' };
}
