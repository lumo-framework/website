# HTTP Request

## Introduction

The Request object provides access to HTTP request data in your Lumo applications. It gives you convenient access to user input, headers, cookies, and files submitted by the user.

## Interacting With The Request

### Accessing The Request

The Request object is automatically injected as the first parameter of your API handler functions:

```typescript
import { Request, Response } from '@lumo-framework/core'

export function GET(request: Request, response: Response) {
  // Access request data
  return response.json({ message: 'Hello World' })
}
```

### Request Path, Host, and Method

You can retrieve information about the incoming request using various properties:

```typescript
export function handler(request: Request, response: Response) {
  const method = request.method     // GET, POST, PUT, DELETE, etc.
  const url = request.url          // Full URL
  const path = request.path        // Path portion only
  
  return response.json({
    method,
    url,
    path
  })
}
```

### Request Headers

The `headers` property provides access to all request headers:

```typescript
export function GET(request: Request, response: Response) {
  // Access all headers
  const allHeaders = request.headers
  
  // Get specific header (case-insensitive)
  const contentType = request.header('content-type')
  const authorization = request.header('Authorization')
  const userAgent = request.header('user-agent')
  
  return response.json({
    contentType,
    authorization,
    userAgent: request.userAgent // Also available as property
  })
}
```

### Request IP Address

The client's IP address is available through the `ip` property:

```typescript
export function GET(request: Request, response: Response) {
  const clientIp = request.ip
  
  return response.json({
    message: `Hello from ${clientIp}`
  })
}
```

## Input

### Retrieving Input

#### Query Parameters

Access URL query parameters through the `query` property:

```typescript
export function GET(request: Request, response: Response) {
  // URL: /api/users?page=2&limit=10&active=true
  const page = request.query.page       // "2"
  const limit = request.query.limit     // "10"
  const active = request.query.active   // "true"
  
  // With defaults and type conversion
  const pageNum = parseInt(request.query.page || '1')
  const limitNum = parseInt(request.query.limit || '10')
  const isActive = request.query.active === 'true'
  
  return response.json({
    page: pageNum,
    limit: limitNum,
    active: isActive
  })
}
```

#### Route Parameters

Access dynamic route segments through the `params` property:

```typescript
// File: src/users/[id].ts
export function GET(request: Request, response: Response) {
  const userId = request.params.id
  
  return response.json({
    message: `Getting user ${userId}`
  })
}

// File: src/users/[userId]/posts/[postId].ts
export function GET(request: Request, response: Response) {
  const { userId, postId } = request.params
  
  return response.json({
    message: `Getting post ${postId} for user ${userId}`
  })
}
```

#### Request Body

Access the request body using various methods depending on the content type:

```typescript
export async function POST(request: Request, response: Response) {
  // JSON data
  const jsonData = await request.json()
  
  // Plain text
  const textData = await request.text()
  
  // Form data
  const formData = await request.formData()
  
  // Raw buffer
  const buffer = await request.buffer()
  
  return response.json({ received: 'ok' })
}
```

#### JSON Input

Parse JSON request bodies:

```typescript
export async function POST(request: Request, response: Response) {
  try {
    const userData = await request.json()
    const { name, email, age } = userData
    
    if (!name || !email) {
      return response.status(400).json({
        error: 'Name and email are required'
      })
    }
    
    return response.status(201).json({
      message: 'User created',
      user: { name, email, age }
    })
  } catch (error) {
    return response.status(400).json({
      error: 'Invalid JSON in request body'
    })
  }
}
```

#### Form Data Input

Handle form submissions:

```typescript
export async function POST(request: Request, response: Response) {
  const formData = await request.formData()
  
  const name = formData.name
  const email = formData.email
  
  // Handle arrays (multiple values with same name)
  const tags = Array.isArray(formData.tags) 
    ? formData.tags 
    : formData.tags ? [formData.tags] : []
  
  return response.json({
    name,
    email,
    tags
  })
}
```

### Cookies

Access request cookies through the `cookies` property:

```typescript
export function GET(request: Request, response: Response) {
  // Get all cookies
  const allCookies = request.cookies
  
  // Get specific cookie
  const sessionId = request.cookies.session_id
  const theme = request.cookies.theme || 'light'
  
  return response.json({
    sessionId,
    theme,
    allCookies
  })
}
```
