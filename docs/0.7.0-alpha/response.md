# HTTP Response

## Introduction

tsc.run provides several ways to return responses from your API handlers. You may return JSON data, plain text responses, HTML content, redirects, or even file downloads.

## Creating Responses

### Basic Responses

The simplest responses return JSON data using the `json` method:

```typescript
import { Request, Response } from 'tsc.run'

export function GET(request: Request, response: Response) {
  return response.json({ message: 'Hello World' })
}
```

You can also specify a status code as the second parameter:

```typescript
export function POST(request: Request, response: Response) {
  const user = createUser(request.json())
  
  return response.json(user, 201) // Created
}
```

### Attaching Headers

Add custom headers to your responses using the `header` method:

```typescript
export function GET(request: Request, response: Response) {
  return response
    .header('X-API-Version', '2.0')
    .header('Cache-Control', 'no-cache')
    .json({ data: 'Hello World' })
}
```

### Attaching Cookies

Set cookies on the response using the `cookie` method:

```typescript
export function POST(request: Request, response: Response) {
  return response
    .cookie('session_id', 'abc123', {
      httpOnly: true,
      secure: true,
      maxAge: 3600 // 1 hour
    })
    .json({ message: 'Logged in successfully' })
}
```

Cookie options include:
- `maxAge`: Expiration in seconds
- `expires`: Explicit expiration date
- `domain`: Cookie domain
- `path`: Cookie path
- `secure`: HTTPS only
- `httpOnly`: HTTP only access
- `sameSite`: SameSite policy ('strict', 'lax', or 'none')

### Setting Status Codes

Set the HTTP status code using the `status` method:

```typescript
export function GET(request: Request, response: Response) {
  const user = findUser(request.params.id)
  
  if (!user) {
    return response.status(404).json({
      error: 'User not found'
    })
  }
  
  return response.status(200).json(user)
}
```

## Response Types

### JSON Responses

Return JSON data using the `json` method:

```typescript
export function GET(request: Request, response: Response) {
  const users = getAllUsers()
  
  return response.json({
    data: users,
    meta: {
      total: users.length,
      page: 1
    }
  })
}
```

### HTML Responses

Return HTML content using the `html` method:

```typescript
export function GET(request: Request, response: Response) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head><title>Welcome</title></head>
      <body>
        <h1>Hello from tsc.run!</h1>
      </body>
    </html>
  `
  
  return response.html(htmlContent)
}
```

### Plain Text Responses

Return plain text using the response body directly:

```typescript
export function GET(request: Request, response: Response) {
  return response
    .header('Content-Type', 'text/plain')
    .status(200)
    // Use the Response object directly
}
```

### File Downloads

Provide file downloads using the `attachment` method:

```typescript
export function GET(request: Request, response: Response) {
  const fileData = getFileContent()
  
  return response
    .attachment('report.pdf')
    .header('Content-Type', 'application/pdf')
    // Return file data
}
```

## Redirects

### Basic Redirects

Redirect users to different URLs using the `redirect` method:

```typescript
export function POST(request: Request, response: Response) {
  // Process form submission
  processForm(request.json())
  
  // Redirect to success page
  return response.redirect('/success')
}
```

### Redirects with Status Codes

Specify the redirect status code:

```typescript
export function GET(request: Request, response: Response) {
  // Permanent redirect
  return response.redirect('/new-url', 301)
  
  // Temporary redirect (default is 302)
  return response.redirect('/temporary-url', 302)
}
```

### External Redirects

Redirect to external domains:

```typescript
export function GET(request: Request, response: Response) {
  return response.redirect('https://external-site.com/page')
}
```
