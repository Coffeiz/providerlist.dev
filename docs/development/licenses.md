# Third-Party Dependency Licenses

The repository uses pnpm to manage dependencies and maintains a reviewable license inventory.

## Generate the inventory

After installing dependencies, run this command from the repository root:

```bash
pnpm licenses:generate
```

The script generates:

- `licenses/javascript.json`: dependency and license information, with versions pinned by `pnpm-lock.yaml`.
- `licenses/manifest.json`: an index of the inventory.
- `licenses/THIRD-PARTY-NOTICES.md`: third-party notices that may be included with releases.

Do not edit generated files by hand. Regenerate and review the differences when dependencies or the lockfile change. Platform-specific optional dependencies may vary by generation environment.

## CI checks

```bash
pnpm licenses:check
```

CI checks the committed inventory, verifies that direct dependencies are covered, and enforces the license policy in `licenses/policy.json`:

- **`blockedPatterns`**: blocks restricted licenses. An SPDX `OR` expression passes if at least one option is acceptable; every option in an `AND` expression must be acceptable.
- **`reviewLicenses`**: flags licenses for manual review before release, including entries that could not be identified.
- **`exceptions`**: records approved exceptions by package name and license expression, with a reason.

License checks do not replace legal review and do not modify dependencies.
