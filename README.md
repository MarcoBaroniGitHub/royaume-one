# Royaume ONE

**Your context. Your tools. Your boundaries.**

An Open Networked Ecosystem for connecting projects, knowledge, tools and AI agents — while keeping control of what each participant may read, use and share.

[Explore the demonstrator](https://royaume-one.vercel.app) · [Architecture](docs/architecture.md) · [Plugin contract](docs/plugins.md) · [Business model](docs/business-model.md) · [Français](docs/README.fr.md)

[ChatGPT setup](docs/setup-chatgpt.md) · [Personal and professional spaces](docs/spaces.md) · [Choosing a version](docs/versioning.md)

## Status: early foundation

This is a new, deliberately small foundation for the future community project. It contains original code, synthetic examples, a presentation website, a policy demonstrator and automated tests. It is **not the existing private cockpit**, a migration of its history, or a production agent runtime.

The intended destination is an open-source project. **The license has not yet been adopted. This repository is not yet an open-source release and does not currently grant reuse rights.** Apache-2.0 is the maintainer's proposed decision to review; see [licensing](docs/licensing.md). Discuss design and use cases through issues; code contributions open after the license decision.

## Why Royaume?

A project manager tracks tasks. Royaume's proposed role is to structure the context around work: the people, organizations, projects, resources, permissions and evidence that agents and connected tools need.

- Keep a personal space and separate organization/client spaces.
- Give agents access for a particular purpose, without automatically permitting external sharing.
- Extend workflows through a versioned plugin API.
- Connect existing tools through adapters instead of replacing them.
- Show evidence and dates instead of treating a status label as proof of autonomous execution.

## Try the foundation

Requires Node.js 22 or newer. No dependencies, accounts or API keys are needed.

```sh
npm test
npm run build
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. The interactive example runs locally in your browser with synthetic data. It does not send email, store permissions or modify any connected account.

## What works here

| Component | Current state |
| --- | --- |
| Presentation and interactive permission example | Implemented |
| Deny-by-default policy function | Implemented and tested on synthetic records |
| Per-purpose access, organization/project boundaries, external sharing | Demonstrated in policy tests |
| Derived-resource checks and revocation on next check | Demonstrated in policy tests |
| ChatGPT setup and project instruction template | Documented; not automatically installed in your account |
| Version selection | Git commit pinning documented; no release catalogue or in-app switcher |
| Plugin manifest and host API | Proposed contract; no third-party loader |
| Jira, Notion, Gmail and other adapters | Proposed; no live connections in this repository |
| Authentication, database enforcement, isolated plugin execution | Not implemented |
| Durable agent orchestration and unattended operation | Not implemented |
| Donations and commercial hosting | Business hypotheses; no checkout or sponsorship account activated |

## First milestones

1. Adopt the open-source license and contribution rules.
2. Connect the policy to authenticated backend reads, search and outgoing operations.
3. Demonstrate one useful workflow with a real adapter, interruption and duplicate prevention.
4. Add an isolated plugin host and an example extension using only the public API.
5. Invite a small set of contributors and design partners before operating a marketplace.

See [ROADMAP.md](ROADMAP.md), [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).
