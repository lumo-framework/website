# Events

Lumo Framework provides a powerful event system that enables decoupled, event-driven architecture where you can dispatch events from your API handlers and process them asynchronously with subscribers. Events allow different parts of your application to communicate without direct dependencies, making your code more maintainable and scalable.

## Introduction

The event system in Lumo Framework allows you to:

- **Dispatch events** from any function when something important happens.
- **Listen for events** with dedicated subscriber functions.
- **Decouple components** by using events instead of direct function calls.

Events are processed asynchronously and can trigger multiple subscribers, making them perfect for notifications, logging, data synchronization, and workflow automation.

:::tip Event Configuration
Make sure you've [configured](/master/configuration#events) events in your `lumo.config.ts`.
:::

## Event Types

Define events as TypeScript types for better type safety:

```typescript
export type UserRegisteredEvent = {
  id: string;
  name: string;
  email: string;
  registeredAt: string;
}

export type OrderCompletedEvent = {
  orderId: string;
  total: number;
  items: Array<{ id: string; quantity: number }>;
  completedAt: string;
}
```

## Event Message Structure

Events are structured as:

```typescript
export type Event<T = unknown> = {
  type: string;    // Event name
  data: T;         // Event payload
}
```

## Basic Event Usage

### Dispatching Events

Use `events.emit()` to dispatch events from your API functions:

```typescript
// functions/api/users/register.ts
import { Request, Response, events } from '@lumo-framework/core'

export async function POST(request: Request, response: Response) {
  const userData = request.json()
  
  // Create user logic
  const user = {
    id: Date.now().toString(),
    ...userData,
    registeredAt: new Date().toISOString()
  }
  
  // Dispatch user creation event
  await events.emit('user.registered', {
    id: user.id,
    name: user.name,
    email: user.email,
    registeredAt: user.registeredAt
  })
  
  return response.json(user, 201)
}
```
