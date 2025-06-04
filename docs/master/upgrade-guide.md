# Upgrade Guide

This guide covers upgrading between versions of Lumo Framework and its ecosystem packages.

## General Upgrade Process

### 1. Update CLI

```bash
# Update to latest stable version
npm install -g @lumo-framework/cli@latest

# Or update to specific version
npm install -g @lumo-framework/cli@@0.1.0-alpha.5
```

### 2. Update Project Dependencies

For AWS deployments:
```bash
# Update packages for AWS deployment
npm install @lumo-framework/core@latest @lumo-framework/adapter-aws@latest
```

For Cloudflare deployments:
```bash
# Update packages for Cloudflare deployment
npm install @lumo-framework/core@latest @lumo-framework/adapter-cloudflare@latest
```

## Version-Specific Upgrades

Lumo Framework is currently in active development with frequent updates, this section will be used when the first stable version is released.

## Troubleshooting

### Common Issues

**Package version mismatch**:
```bash
# Check versions
npm list @lumo-framework/cli @lumo-framework/core

# Fix mismatched versions
npm install @lumo-framework/cli@@0.1.0-alpha.5 @lumo-framework/core@@0.1.0-alpha.5
```

### Getting Help

- Check [Release Notes](/master/release-notes) for detailed changes
- Report issues on [GitHub](https://github.com/lumo-framework/monorepo/issues)
- Join [Discord](https://discord.gg/m7bPsv8Z) for community support