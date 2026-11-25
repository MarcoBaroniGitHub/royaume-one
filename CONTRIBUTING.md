# Participating in Royaume ONE

Start with an issue describing your use case, the current behavior, expected behavior and a small reproducible example using synthetic data. Architecture feedback, testing reports and design discussion are welcome.

Code contributions are welcome under [Apache-2.0](LICENSE). Unless you explicitly state otherwise, a contribution intentionally submitted for inclusion is provided under Apache-2.0, without additional terms, as described in section 5 of the license. Submit only material you have the right to contribute and preserve any applicable third-party notices. No copyright assignment or separate CLA is required. Do not send private files, personal histories, access tokens or production datasets in issues or pull requests.

For future extensions: use the public host API, request only necessary capabilities, document all network destinations, provide disable/uninstall behavior, and include negative permission tests. Do not modify the core to bypass permissions.

Before submitting a code change: `npm test` and `npm run build`. Keep changes small, document limits and distinguish a synthetic test from a real integration. Contributions are reviewed before inclusion; submitting a change does not guarantee acceptance.
