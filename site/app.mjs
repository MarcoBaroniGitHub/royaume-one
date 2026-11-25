// Copyright 2026 Marco Baroni and the Royaume ONE contributors.
// SPDX-License-Identifier: Apache-2.0

import { authorize } from './packages/core/policy.mjs';

const switches = ['agents', 'reference', 'external'].map(id => document.getElementById(id));
const principal = { id: 'demo-agent', kind: 'agent', workspaceId: 'demo-workspace', projectId: 'demo-lab' };
function render() {
  const resource = { id: 'synthetic-prototype', workspaceId: 'demo-workspace', projectId: 'demo-lab', classification: 'internal',
    agentsAllowed: switches[0].checked, externalAllowed: switches[2].checked, publicationAllowed: false,
    allowedPurposes: switches[1].checked ? ['development', 'recruitment'] : ['development'],
    destinations: ['recruiter:synthetic'] };
  // Synthetic host approval. It grants no actual account or service access.
  const now = Date.now();
  const grants = [{ principalId: principal.id, workspaceId: principal.workspaceId, projectId: principal.projectId,
    resourceIds: [resource.id], operations: ['read', 'export'], purposes: ['development', 'recruitment'],
    destinations: ['internal', 'recruiter:synthetic'], revoked: false, expiresAt: now + 60000 }];
  for (const [id, operation, purpose, destination] of [
    ['internal-result', 'read', 'development', 'internal'],
    ['context-result', 'read', 'recruitment', 'internal'],
    ['external-result', 'export', 'recruitment', 'recruiter:synthetic'],
  ]) {
    const result = authorize({ principal, resource, operation, purpose, destination, now }, grants);
    const output = document.getElementById(id);
    output.textContent = result.allowed ? '✓ Autorisé' : '↳ Bloqué';
    output.className = `result ${result.allowed ? 'allowed' : 'blocked'}`;
  }
}
switches.forEach(input => input.addEventListener('change', render));
render();
