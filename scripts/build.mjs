import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist/packages/core', { recursive: true });
await cp('site', 'dist', { recursive: true });
await cp('packages/core/policy.mjs', 'dist/packages/core/policy.mjs');
console.log('Built static presentation and shared policy demonstrator.');
