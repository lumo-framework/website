# Project Structure

## Introduction

Lumo Framework projects follow a file-based architecture where your directory structure directly maps to your serverless infrastructure. By placing functions in specific directories, the framework automatically discovers and configures them for deployment without requiring explicit registration or complex configuration files.

## Root Directory

When you create a new Lumo Framework project, you'll see the following directory structure:

- **functions/** - Contains all your serverless functions organised by type
- **events/** - Event type definitions and schemas
- **lumo.config.js** - Framework configuration file
- **tsconfig.json** - TypeScript compiler configuration
- **package.json** - Node.js dependencies and scripts

## The Functions Directory

The `functions` directory is the heart of your Lumo Framework application. All serverless functions are automatically discovered and deployed based on their location and exports within this directory. The framework requires specific subdirectories for different function types.

### API Routes (`functions/api/`)

Files in the `api` directory are automatically mapped to HTTP endpoints. The file structure directly corresponds to your API routes:

```
functions/
  api/
    users.ts           # GET/POST /users
    users/
      index.ts         # GET/POST /users (alternative structure)
      [id].ts          # GET/POST /users/:id
    posts/
      index.ts         # GET/POST /posts
      [slug].ts        # GET/POST /posts/:slug
    health.ts          # GET /health
```

Each API route file should export HTTP method handlers:

```typescript
// functions/api/users.ts
import { http } from "@lumo-framework/core";

export async function GET(request: http.Request) {
  // Handle GET /users
}

export async function POST(request: http.Request) {
  // Handle POST /users
}
```

### Event Subscribers (`functions/subscribers/`)

Event subscribers handle asynchronous events throughout your application. Files must be placed in the `functions/subscribers/` directory for automatic discovery. Each file in this directory represents a subscriber function:

```
functions/
  subscribers/
    send-welcome-email.ts    # Handles user registration events
    update-user-stats.ts     # Handles user activity events
    process-payment.ts       # Handles payment events
```

Export a function called `listen` to create an event subscriber:

```typescript
// functions/subscribers/send-welcome-email.ts
export async function listen(event: UserRegisteredEvent) {
  // Handle user registration
}
```

## The Events Directory

The `events` directory is an optional way to organise event type definitions and schemas. You can place event types anywhere in your project that suits your preferences:

```
events/
  user-registered.ts       # User registration event schema
  payment-processed.ts     # Payment event schema
  order-created.ts         # Order event schema
```

Define event types for better TypeScript support:

```typescript
// events/user-registered.ts
export interface UserRegisteredEvent {
  userId: string;
  email: string;
  timestamp: Date;
}
```

The flexibility of Lumo Framework means you can adapt this structure to fit your application's needs while benefiting from the framework's automatic discovery and deployment capabilities.