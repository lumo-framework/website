# Release Notes
Welcome to the tsc.run release notes! This document provides an overview of the latest changes, improvements, and fixes in the tsc.run ecosystem.

## Versioning Scheme

tsc.run follows [Semantic Versioning (SemVer)](https://semver.org/) with a unified versioning strategy across all packages in the ecosystem.

### Unified Versioning

All core packages maintain the same version number:

- `@tsc-run/cli` - Command-line interface
- `@tsc-run/core` - Core framework and types  
- `@tsc-run/adapter-aws` - AWS Lambda runtime adapter
- `@tsc-run/adapter-cloudflare` - Cloudflare Workers runtime adapter
- `@tsc-run/utils` - Shared utilities

### Version Format

```
MAJOR.MINOR.PATCH[-PRERELEASE]
```

- **MAJOR**: Breaking changes that require code modifications
- **MINOR**: New features that are backward compatible
- **PATCH**: Bug fixes and minor improvements
- **PRERELEASE**: Alpha/beta releases (e.g., `-next.3`, `-alpha.1`)

### Release Channels

- **Stable**: `npm install @tsc-run/cli` - Production-ready releases
- **Next**: `npm install @tsc-run/cli@next` - Preview of upcoming features

### Compatibility

When upgrading tsc-run, update all packages to the same version:

```bash
npm install @tsc-run/cli@0.7.0 @tsc-run/adapter-aws@0.7.0
```

The CLI will warn if package versions are mismatched to prevent compatibility issues.

## Support Policy

### Release Support Timeline

tsc.run provides different levels of support based on release type and age:

| Release Type       | Bug Fixes                                     | Security Fixes                                     | Duration                   |
|--------------------|-----------------------------------------------|----------------------------------------------------|----------------------------|
| **Current Major**  | <Badge type="tip" text="Active" />            | <Badge type="tip" text="Active" />                 | Until next major release   |
| **Previous Major** | <Badge type="warning" text="Critical only" /> | <Badge type="tip" text="Active" />                 | 12 months after superseded |
| **Older Majors**   | <Badge type="danger" text="No support" />     | <Badge type="warning" text="Critical CVEs only" /> | 6 months after superseded  |

### Current Support Status

- **v0.x (Current)**: Active development with full support.
- **Pre-1.0**: Breaking changes may occur between minor versions during alpha/beta phases.

### Support Definitions

**Bug Fixes**
- **Active**: All bugs fixed in patch releases.
- **Critical only**: Severe bugs affecting core functionality.
- **No support**: Community-driven fixes only.

**Security Fixes**
- **Active**: All security vulnerabilities patched within 48 hours for high severity
- **Critical CVEs only**: Only CVSS 7.0+ vulnerabilities with available fixes

### Long-Term Support (LTS)

Starting with v1.0, tsc.run will designate certain major releases as LTS:

- **LTS releases**: Extended 18-month support window.
- **LTS cadence**: Every second major release.
- **LTS benefits**: Backported security fixes and critical bug fixes.

### End of Life (EOL)

When a version reaches EOL:
- No further updates or patches.
- Security vulnerabilities will not be addressed.
- Community may continue maintenance through forks.
- 90-day advance notice provided before EOL.

### Getting Support

- **Critical security issues**: tsc.run@icloud.com
- **Bug reports**: [GitHub](https://github.com/tsc-run/monorepo/security/policy)
- **Community support**: [Discord](https://discord.gg/m7bPsv8Z)
