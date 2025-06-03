# API Routing

tsc.run provides automatic API discovery and routing based on your file structure and function exports. This convention-over-configuration approach means you can focus on building your application logic without worrying about manual route definitions.

## Introduction

API routes are automatically discovered from TypeScript files in your project. Each exported function becomes an API endpoint, with the file path determining the route structure.

## Basic Routing

### File-Based Routing

Routes are determined by your file structure:

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

### HTTP Methods

Use named exports to handle specific HTTP methods:

```typescript
// functions/api/users.ts
import { http } from '@tsc-run/core'

export function GET(request: http.Request, response: http.Response) {
  return response.json({ users: [] })
}

export function POST(request: http.Request, response: http.Response) {
  const user = request.json()
  // Create user logic
  return response.json({ id: 1, ...user }, 201)
}

export function PUT(request: http.Request, response: http.Response) {
  const user = request.json()
  // Update user logic
  return response.json({ ...user })
}

export function DELETE(request: http.Request, response: http.Response) {
  // Delete user logic
  return response.status(204)
}

export function PATCH(request: http.Request, response: http.Response) {
  const updates = request.json()
  // Partial update logic
  return response.json({ ...updates })
}
```

::: tip
For detailed information about the Request and Response objects, see the [HTTP Request](/master/request) and [HTTP Response](/master/response) documentation.
:::

## Dynamic Routing

### URL Parameters

Use square brackets `[param]` to create dynamic route segments:

```typescript
// functions/api/users/[id].ts
import { http } from '@tsc-run/core'

export function GET(request: http.Request, response: http.Response) {
  const { id } = request.params
  return response.json({ userId: id })
}
```

### Multiple Parameters

```typescript
// functions/api/users/[userId]/posts/[postId].ts
import { http } from '@tsc-run/core'

export function GET(request: http.Request, response: http.Response) {
  const { userId, postId } = request.params
  return response.json({ 
    userId, 
    postId,
    post: `Post ${postId} by user ${userId}`
  })
}
```
