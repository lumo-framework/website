# Tasks

::: warning
Tasks are currently only available for AWS deployments.
:::

Tasks in Lumo Framework are **deployment lifecycle functions** that execute during specific phases of your application deployment. They are designed to run operations that need to happen at deployment time, such as database migrations, asset preprocessing, cache warming, or any other setup operations.

## Overview

Tasks provide a robust way to handle deployment-time operations in a serverless environment, ensuring that your application infrastructure is properly configured and data is migrated before your application starts serving traffic.

### Key Features

- **Deployment Integration**: Execute automatically during deployment/update cycles
- **Environment Awareness**: Access deployment context and environment information
- **Asset Management**: Bundle files and directories needed for task execution
- **Flexible Configuration**: Control when tasks run and how long they can execute

## Getting Started

### Creating a Task

Tasks are stored in the `functions/tasks/` directory and export a `run` function:

```typescript
// functions/tasks/run-migrations.ts
import { tasks } from '@lumo-framework/core';

export const run: tasks.TaskHandler = async (ctx) => {
  console.log('Running database migrations...');
  
  // Your task logic here
  await runDatabaseMigrations();
  
  return {
    success: true,
    message: 'Database migrations completed successfully',
    data: {
      migrationsRun: 5,
      environment: ctx.deployment.environment
    }
  };
};
```

### Task Configuration

Configure tasks in your `lumo.config.js`:

```javascript
export default {
  projectName: 'my-app',
  provider: 'aws',
  tasks: {
    'run-migrations': {
      timeout: 120,                    // 2 minutes timeout
      runOn: ['deploy', 'update'],     // Run on both deploy and updates
      copyAssets: [
        { from: 'migrations', to: 'migrations' }
      ]
    }
  }
}
```

## Task Context

Every task receives a `TaskContext` object with deployment information:

```typescript
interface TaskContext {
  deployment: {
    isFirstDeploy: boolean;        // Whether this is the initial deployment
    previousVersion?: string;       // Previous version (for updates)
    environment: string;           // Current environment (dev, prod, etc.)
  };
  config: Record<string, unknown>; // Configuration passed to the task
  workingDirectory: string;        // Working directory path
}
```

### Using Context

```typescript
export const run: tasks.TaskHandler = async (ctx) => {
  if (ctx.deployment.isFirstDeploy) {
    console.log('Initial deployment - setting up database schema');
    await createSchema();
  } else {
    console.log(`Updating from version ${ctx.deployment.previousVersion}`);
    await runMigrations();
  }
  
  return {
    success: true,
    message: `Setup complete for ${ctx.deployment.environment}`
  };
};
```

## Configuration Options

### Task Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `timeout` | number | `300` | Maximum execution time in seconds |
| `runOn` | array | `['deploy', 'update']` | When to execute the task |
| `copyAssets` | array | `[]` | Files/directories to copy to execution environment |

### Asset Copying

Tasks can bundle files needed for execution:

```javascript
tasks: {
  'seed-database': {
    copyAssets: [
      { from: 'seed-data', to: 'data' },
      { from: 'scripts/setup.sql', to: 'setup.sql' }
    ]
  }
}
```

## Common Use Cases

### Database Migrations

```typescript
// functions/tasks/migrate-database.ts
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

export const run: tasks.TaskHandler = async (ctx) => {
  const migrationsDir = join(ctx.workingDirectory, 'migrations');
  const migrationFiles = await readdir(migrationsDir);
  
  for (const file of migrationFiles.sort()) {
    const migration = await readFile(join(migrationsDir, file), 'utf8');
    await runSQLMigration(migration);
  }
  
  return {
    success: true,
    message: `Applied ${migrationFiles.length} migrations`,
    data: { migrationsApplied: migrationFiles.length }
  };
};
```

### Cache Warming

```typescript
// functions/tasks/warm-cache.ts
export const run: tasks.TaskHandler = async (ctx) => {
  const endpoints = ['/api/popular-products', '/api/categories'];
  
  for (const endpoint of endpoints) {
    await fetch(`https://api.${ctx.deployment.environment}.example.com${endpoint}`);
  }
  
  return {
    success: true,
    message: 'Cache warmed successfully'
  };
};
```

### Asset Processing

```typescript
// functions/tasks/process-assets.ts
export const run: tasks.TaskHandler = async (ctx) => {
  const assetsDir = join(ctx.workingDirectory, 'assets');
  
  // Process and upload assets to CDN
  await processAndUploadAssets(assetsDir);
  
  return {
    success: true,
    message: 'Assets processed and uploaded'
  };
};
```

## Error Handling

Tasks should return structured results indicating success or failure:

```typescript
export const run: tasks.TaskHandler = async (ctx) => {
  try {
    await riskyOperation();
    
    return {
      success: true,
      message: 'Operation completed successfully'
    };
  } catch (error) {
    console.error('Task failed:', error);
    
    return {
      success: false,
      message: `Operation failed: ${error.message}`,
      data: { error: error.stack }
    };
  }
};
```
