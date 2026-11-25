# Apache License 2.0 — adopted

Apache-2.0 was explicitly adopted by the project owner on 25 November 2026. The original code and documentation in this repository, including its example plugin manifest, are licensed under the exact official text in [LICENSE](../LICENSE). See also [NOTICE](../NOTICE). The package remains marked private to prevent accidental publication to a package registry; this does not restrict its open-source license.

**Chosen license: Apache License 2.0**, to favor adoption, commercial integrations and community extensions. It permits commercial forks, including closed modifications, under its terms; it does not require those forks to contribute back. Hosting, integration and support are proposed ways to fund the project.

**Alternative considered, not adopted: AGPL-3.0.** Its reciprocal obligations and plugin compatibility would fit a different tradeoff. A future licensing change or dual-license business would require the appropriate rights to all relevant contributions; adopting Apache-2.0 does not assign contributors' copyrights to the maintainer.

[CONTRIBUTING.md](../CONTRIBUTING.md) defines inbound contributions under Apache-2.0, consistently with section 5 of the license, without requiring a separate CLA or copyright assignment. Third-party plugins and dependencies retain their own applicable licenses. This adoption covers this repository, not private operational data or the separate private cockpit. Do not import third-party code without checking provenance and license compatibility.

References: [Apache license](https://www.apache.org/licenses/LICENSE-2.0), [GNU AGPL](https://www.gnu.org/licenses/agpl-3.0.html), [GitHub licensing guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

## MIT, Apache and reciprocity — decision guide

| License | Commercial or closed-source derivatives | Main distinction |
| --- | --- | --- |
| MIT | Permitted with its notice conditions | Very short text; copyright and permission notice must be preserved; no explicit patent-grant clause |
| Apache-2.0 | Permitted under its conditions | Express contributor patent grant with termination conditions, modified-file notices, attribution and NOTICE handling when applicable; no trademark grant |
| MPL-2.0 | Larger proprietary work possible | Source of covered files, including modifications, must remain available under MPL when distributed |
| GPL-3.0 | Covered derivatives cannot be distributed as closed-source software | Corresponding source and reciprocal licensing required when covered works are conveyed; private use alone is not a public-release obligation |
| AGPL-3.0 | Strong reciprocal obligations | Adds a corresponding-source offer to remote users of a modified network-served version |

All five allow commercial activity. Reciprocity does not automatically require users' private business data, prompts or documents to be published; the relevant obligations concern covered software and its corresponding source. The scope of a combined work or plugin requires reviewing the actual integration, not a blanket claim that every plugin shares the core's license.

MIT is a reasonable choice for a small library or ecosystem prioritizing minimal license text. Apache-2.0 is the recommendation here because an extensible platform may receive contributions from companies and an explicit patent clause makes the contribution framework clearer. It is not a universal shield against patents or third-party rights. Both licenses allow a competitor to build a closed derivative without contributing improvements upstream. If preventing that outcome is the priority, MIT versus Apache is the wrong comparison: consider reciprocal licenses such as MPL or AGPL instead.

The comparison above explains the tradeoff. Apache-2.0 is the actual adopted license for this repository. There is no tagged stable release yet, and open-source licensing does not imply production security or unattended-operation guarantees.

Primary sources consulted 25 November 2026: [MIT text, OSI](https://opensource.org/license/mit), [Apache text](https://www.apache.org/licenses/LICENSE-2.0), [Apache FAQ](https://www.apache.org/foundation/license-faq.html), [Mozilla MPL FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/), [GPL text](https://www.gnu.org/licenses/gpl-3.0.html), [AGPL text, section 13](https://www.gnu.org/licenses/agpl-3.0.html).
