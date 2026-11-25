# License decision — pending

Public visibility is not an open-source license. This repository has not yet adopted a license and does not currently grant permission to reuse its code or documentation. The package is private to prevent accidental package publication.

**Proposed choice: Apache License 2.0** for the new original core and SDK, to favor adoption, commercial integrations and community extensions. It permits commercial forks, including closed modifications; it does not require those forks to contribute back. Hosting, integration and support would fund the project.

**Alternative: AGPL-3.0** if reciprocal source availability for modified network-served versions is more important. Its obligations and plugin compatibility need to be considered against the desired ecosystem. A dual-license business would require appropriate rights to all relevant contributions.

Before accepting code contributions or announcing an open-source release, obtain the owner's explicit license decision, add the exact unmodified license text and copyright notices, and define inbound contribution terms. Do not copy the private cockpit or third-party code without a provenance/license review.

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

This comparison does not adopt a license. No LICENSE file has been installed by this documentation update.

Primary sources consulted 25 November 2026: [MIT text, OSI](https://opensource.org/license/mit), [Apache text](https://www.apache.org/licenses/LICENSE-2.0), [Apache FAQ](https://www.apache.org/foundation/license-faq.html), [Mozilla MPL FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/), [GPL text](https://www.gnu.org/licenses/gpl-3.0.html), [AGPL text, section 13](https://www.gnu.org/licenses/agpl-3.0.html).
