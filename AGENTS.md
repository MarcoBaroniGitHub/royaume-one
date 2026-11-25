# Working on this repository

This is the new generic foundation, not the private operational cockpit. Keep all examples synthetic. Never import personal histories, private registry contents, credentials or production data into this public repository.

The license is pending an explicit owner decision. Do not claim this is an open-source release, adopt a license, or accept code contributions until that decision is recorded.

`packages/core/policy.mjs` is an experimental pure decision function. Do not claim production isolation until authentication, trusted server records, storage filters, outgoing gateways and isolated plugin execution have been integrated and tested. UI switches alone are not enforcement.

Run `npm test` and `npm run build` for a policy/source change. Never introduce permission bypasses to make a demo pass.

Before a remote push connected to Vercel, inspect deployment creations across the owning team for the preceding 24 hours. At around 60, warn; at 70, or 3 previews of the same branch in 15 minutes, suspend non-urgent pushes. If that check is unavailable, keep work local unless the owner explicitly requests an urgent correction. These are conservative operating thresholds, not certified platform quotas. Bundle validated changes into one tree/commit/ref update; preserve automatic previews and CI.

The initial site uses static Vercel deployment only. A shared deployment-preflight controller is still to be ported and validated before iterative Git auto-deployment is enabled. Do not install a token in this repository, Notion or an issue.
