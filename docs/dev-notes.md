# Development Notes

## Environment Verification
- Confirmed the A-12 container includes the spec-bootstrap prerequisites:
  - Python 3.12.10 with pip 25.3 available for dependency management.
  - Poetry 2.1.4 available for projects that opt into Poetry workflows.
  - Node.js v20.19.4 for JavaScript tooling parity with spec-bootstrap expectations.

## Branching Update
- Created the `develop` integration branch locally (mirroring spec-bootstrap flow) and branched `feature/notion-sync` from it for current workstreams.

## CI/CD Alignment
- Reviewed workflows under `.github/workflows/` to mirror existing naming conventions (e.g., `setup-dry-run`, `tfc-sync`) and to ensure permission usage remains consistent with the repository baseline.

## Testing Strategy
- Continue to rely on repository defaults: run `pytest` for Python coverage and `npm test` for Node components prior to raising pull requests from `feature/notion-sync`.
- Use the `setup-dry-run` workflow for validation when pushing to integration branches.
