# Subscribers

Subscribers are functions that listen to and respond to events in your tsc.run application. They enable event-driven architecture by allowing different parts of your system to react to events without direct coupling.

## Introduction

Event subscribers in tsc.run:

- **Listen for specific events** emitted throughout your application.
- **Process events asynchronously** without blocking the original request.
- **Enable decoupled architecture** where services communicate through events.

Subscribers are automatically discovered and configured based on your project structure and configuration.

## Basic Subscriber Setup

### Creating a Subscriber

```typescript
// functions/subscribers/send-welcome-email.ts
import { events } from '@tsc-run/core';
import type { UserRegisteredEvent } from '../../events/user-registered.js';

export async function listen(event: events.Event<UserRegisteredEvent>) {
    const { type, data } = event;

    console.log(`Processing ${type} event for user:`, data.id);

    // Send welcome email logic
    await sendWelcomeEmail(data.email, data.name);

    console.log(`Welcome email sent to ${data.email}`);
}

async function sendWelcomeEmail(email: string, name: string) {
    // Email sending implementation
}
```

### Configuration

Configure subscribers in your `tsc-run.config.js`:

```javascript
// tsc-run.config.js
export default {
    provider: 'aws',
    events: {
        eventBus: 'default',
        subscribers: {
            'send-welcome-email': {
                events: ['user.registered', 'user.verified']
            },
        }
    }
};
```
