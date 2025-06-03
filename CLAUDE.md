# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress documentation website for tsc.run, a serverless toolkit for TypeScript. The site documents the framework's features, API, CLI commands, and deployment guides.

## Development Commands

```bash
# Start development server
npm run docs:dev

# Build the documentation site
npm run docs:build

# Preview the built site
npm run docs:preview
```

## Architecture

- **VitePress Configuration**: Located at `docs/.vitepress/config.mjs`
- **Content Structure**: All documentation is in `docs/master/` directory
- **Homepage**: `docs/index.md` contains the hero section and quickstart guide
- **Assets**: Images and static files are in `docs/public/`
- **Versioning**: The site supports versioned docs with "master" as the current version
- **Routing**: Uses VitePress rewrites to map `master/:page*` to `:page*` for clean URLs

## Content Organization

The documentation is structured into these main sections:
- **Prologue**: Release notes and upgrade guides
- **Getting Started**: Quickstart, project structure, configuration
- **Core Concepts**: API routing, events, subscribers, validation
- **HTTP**: Request/response handling
- **CLI**: Command-line interface reference
- **Deployment**: AWS and Cloudflare deployment guides

## Key Files

- `docs/.vitepress/config.mjs`: Main VitePress configuration with navigation and theming
- `docs/index.md`: Homepage with hero section and feature highlights
- `docs/master/*.md`: All documentation content organized by topic
- `package.json`: Contains npm scripts for development and building

## Theme Customisation

The site uses the default VitePress theme with custom:
- Logo: `/tsc-mascot.png`
- Navigation with version selector
- Social links to GitHub and Twitter
- Custom fonts (Inter from Google Fonts)

## Important Notes

- Do not repeat the same information in multiple places; keep content DRY.
- If you need to reference anything about tsc.run then use these links:
  - [Starter Template](https://github.com/tsc-run/tsc.run)
  - [Monorepo, CLI, Core and Adapters](https://github.com/tsc-run/monorepo)