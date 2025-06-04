::: danger Warning
You're browsing the documentation for an upcoming version of Lumo Framework. The documentation and features of this release are subject to change.
:::

<Spacer />

# Release Notes
Welcome to the Lumo Framework release notes! This document provides an overview of the latest changes, improvements, and fixes in the Lumo Framework ecosystem.

## Versioning Scheme

Lumo Framework follows [Semantic Versioning (SemVer)](https://semver.org/) with a unified versioning strategy across all packages in the ecosystem.

### Unified Versioning

All core packages maintain the same version number:

- `@lumo-framework/cli` - Command-line interface
- `@lumo-framework/core` - Core framework and types  
- `@lumo-framework/adapter-aws` - AWS Lambda runtime adapter
- `@lumo-framework/adapter-cloudflare` - Cloudflare Workers runtime adapter
- `@lumo-framework/utils` - Shared utilities

### Version Format

```
MAJOR.MINOR.PATCH[-PRERELEASE]
```

- **MAJOR**: Breaking changes that require code modifications
- **MINOR**: New features that are backward compatible
- **PATCH**: Bug fixes and minor improvements
- **PRERELEASE**: Alpha/beta releases (e.g., `-next.3`, `-alpha.1`)

### Release Channels

- **Stable**: `npm install @lumo-framework/cli` - Production-ready releases
- **Next**: `npm install @lumo-framework/cli@next` - Preview of upcoming features

### Compatibility

When upgrading Lumo Framework, update all packages to the same version:

```bash
npm install @lumo-framework/cli@0.7.0 @lumo-framework/adapter-aws@0.7.0
```

## Support Policy

### Release Support Timeline

Lumo Framework provides different levels of support based on release type and age:

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

Starting with v1.0, Lumo Framework will designate certain major releases as LTS:

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

- **Critical security issues**: lumo-framework@icloud.com
- **Bug reports**: [GitHub](https://github.com/lumo-framework/monorepo/security/policy)
- **Community support**: [Discord](https://discord.gg/m7bPsv8Z)
