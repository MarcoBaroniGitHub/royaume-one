# Security status

This foundation is not a production security boundary. Authentication, server-side enforcement, database isolation and a third-party plugin sandbox are not implemented. Do not connect production data or run untrusted plugins.

The browser example contains only synthetic data. Changing its switches does not modify any real permissions. The policy function assumes records and grants are loaded by a trusted host; callers must never be permitted to supply their own grants or classification.

Do not publish secrets or real personal data in an issue. For a non-sensitive flaw in this demonstrator, open a minimal reproduction with synthetic data. A private security reporting channel must be configured before any production release.
