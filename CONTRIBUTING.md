# Participating in Royaume ONE

Start with an issue describing your use case, the current behavior, expected behavior and a small reproducible example using synthetic data. Architecture feedback, testing reports and design discussion are welcome.

Code contributions open after the maintainer adopts the project license and inbound terms. No contributor rights assignment or CLA is currently in place. Do not send private files, personal histories, access tokens or production datasets in issues or pull requests.

For future extensions: use the public host API, request only necessary capabilities, document all network destinations, provide disable/uninstall behavior, and include negative permission tests. Do not modify the core to bypass permissions.

Before submitting a code change once contributions are open: `npm test` and `npm run build`. Keep changes small, document limits and distinguish a synthetic test from a real integration.
