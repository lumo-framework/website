# Installation

tsc.run is a serverless toolkit for TypeScript that enables you to build and deploy serverless functions with ease. This lightweight framework auto-discovers routes and subscribers, compiles them to cloud-native functions, and deploys them to AWS, Cloudflare, and more - all from a single CLI.

## System Requirements

Before installing tsc.run, ensure your development environment meets the following requirements:

- **Node.js**: Version 18.0 or higher (Node.js 22+ recommended)
- **npm**: Version 9.0 or higher (comes with Node.js)
- **TypeScript**: Version 5.0 or higher (installed automatically with tsc.run)
- **Operating System**: macOS, Windows, or Linux

### Cloud Provider Requirements

Depending on your deployment target, you'll need:

- **AWS**: AWS CLI configured with appropriate credentials
- **Cloudflare**: Cloudflare account

## Installation Methods

### Using npm (Recommended)

The quickest way to get started with tsc.run is to install the CLI globally using npm:

```bash
npm install -g @tsc-run/cli
```

Verify the installation:

```bash
tsc-run --version
```

### Using npx

If you prefer not to install globally, you can use npx to run commands:

```bash
npx @tsc-run/cli new my-app
```

### Creating Your First Project

Once you have the CLI installed, create a new tsc.run project:

```bash
# Create a new project
tsc-run new my-app

# Navigate to the project directory
cd my-app

# Install dependencies
npm install
```

## Project Structure

After creating a new project, you'll see the following structure:

```
my-app/
├── functions/
│   ├── api/            # API routes (auto-discovered)
│   └── subscribers/    # Event subscribers (auto-discovered)
├── tsc-run.config.js   # Configuration file
├── package.json
├── tsconfig.json
└── README.md
```

## Initial Configuration

### Environment Configuration

tsc.run uses a configuration file (`tsc-run.config.js`) for project settings:

```javascript
import { defineConfig } from '@tsc-run/core';

export default defineConfig({
  projectName: 'my-app',
  environment: 'dev',
  provider: 'aws',
  region: 'us-east-1',
});
```

### Environment Variables

:::warning
This feature is not yet implemented.
:::

Create a `.env` file in your project root for environment-specific settings:

```bash
# Development
NODE_ENV=development

# AWS Configuration (if using AWS)
AWS_REGION=us-east-1
AWS_PROFILE=default

# Cloudflare Configuration (if using Cloudflare)
CLOUDFLARE_API_TOKEN=your-token-here
CLOUDFLARE_ACCOUNT_ID=your-account-id
```

## Development Server

Start the local development server:

```bash
tsc-run dev
```

Your application will be available at `http://localhost:3000` by default.

## Building and Deployment

### Building Your Application

Compile your TypeScript code and prepare for deployment:

```bash
tsc-run build
```

### Deploying to Cloud Providers

Deploy your application.

```bash
tsc-run deploy
```

## Next Steps

Now that you have tsc.run installed and configured, here are some recommended next steps:

- [Configuration](/0.7.0-alpha/configuration)
- [Project Structure](/0.7.0-alpha/project-structure)
- [Deployment](/0.7.0-alpha/deployment)

