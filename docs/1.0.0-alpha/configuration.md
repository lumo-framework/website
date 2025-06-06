# Configuration

Lumo Framework uses minimal configuration to get you up and running quickly. The framework automatically discovers your functions and applies sensible defaults, while still allowing customisation when needed.

## Configuration Files

### lumo.config.js

The main configuration file for your Lumo Framework project.

```javascript
// lumo.config.js
export default {
  projectName: 'my-lumo-app',
  environment: 'dev',
  provider: 'aws',
  region: 'us-east-1',
}
```

## Configuration Options

### Required Options

| Option        | Type   | Description                                    |
|---------------|--------|------------------------------------------------|
| `projectName` | string | Name of your project                           |
| `provider`    | enum   | Deployment provider: `'aws'` or `'cloudflare'` |

### Optional Options

| Option                   | Type     | Default     | Description                                                             |
|--------------------------|----------|-------------|-------------------------------------------------------------------------|
| `environment`            | string   | `'dev'`     | Environment name (dev, staging, production, etc.)                       |
| `region`                 | string   | -           | AWS region (required for AWS provider) <Badge type="info" text="AWS" /> |
| `domainName`             | string   | -           | Custom domain for your API                                              |
| `networking`             | object   | -           | AWS VPC networking configuration <Badge type="info" text="AWS" />       |
| `networking.natGateways` | number   | `0`         | Number of NAT gateways (0-3) <Badge type="info" text="AWS" />           |
| `build`                  | object   | -           | Build configuration options                                             |
| `build.exclude`          | string[] | `[]`        | Files/patterns to exclude from build                                    |
| `secrets`                | object   | -           | Secret management configuration                                         |
| `events`                 | object   | -           | Event system configuration                                              |
| `events.subscribers`     | object   | -           | Event subscriber mappings                                               |

### Default External Modules

The following modules are automatically excluded from builds and don't need to be specified in `build.exclude`:

**AWS Provider** <Badge type="info" text="AWS" />:
- **Node.js built-ins**: `node:*`
- **AWS SDK**: `@aws-sdk/*`, `aws-sdk`, `aws-cdk-lib`, `constructs`, `@aws-cdk/*`
- **Database drivers**: `mysql2`, `mysql`, `sqlite3`, `oracledb`, `pg-native`, `tedious`, `better-sqlite3`
- **Build tools**: `esbuild`, `typescript`, `webpack`, `rollup`, `vite`

**Cloudflare Provider** <Badge type="info" text="Cloudflare" />:
- **Cloudflare Workers built-ins**: `cloudflare:*`
- **Node.js built-ins**: Automatically aliased to browser-compatible implementations

### Secrets Management

Define secrets with optional descriptions:

```javascript
secrets: {
  databaseUrl: {
    value: process.env.DATABASE_URL,
    description: 'PostgreSQL database connection string'
  },
  apiKey: {
    value: () => process.env.API_KEY || generateRandomKey(),
    description: 'Third-party API authentication key'
  }
}
```

### Events

Wire up events to subscribers for an event-driven architecture. This allows different parts of your application to react to events without tight coupling.

```javascript
events: {
  subscribers: {
    'user-service': {
      events: ['user.created', 'user.updated', 'user.deleted']
    },
    'notification-service': {
      events: ['user.created', 'order.completed']
    }
  }
}
```
