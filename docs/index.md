---
layout: home
title: "Lumo Framework | A serverless-first platform for TypeScript"
description: "A minimal framework for building serverless applications in TypeScript. It ships with a CLI to deploy your app to AWS, GCP, Cloudflare and more."
hero:
  name: "Lumo Framework"
  tagline: "The TypeScript framework that deploys anywhere. Write functions, not infrastructure. Export a function, get an API, Lumo handles the rest with zero configuration."
  image:
    light: /tamo-mascot.png
    dark: /tamo-mascot-dark.png
    alt: Tamo - The Lumo Framework Mascot
  actions:
    - theme: brand
      text: Get Started
      link: /0.1.0-alpha/release-notes
    - theme: alt
      text: View on GitHub
      link: https://github.com/lumo-framework

features:
  - icon: 🚀
    title: Minimal & Fast
    details: Lightweight framework with minimal dependencies. Get started in seconds with minimal boilerplate and blazing fast deployments.
  - icon: ☁️
    title: Multi-Cloud Support
    details: Deploy to AWS Lambda, Cloudflare Workers, and more coming soon with a single command.
  - icon: 📦
    title: TypeScript First
    details: Built for TypeScript from the ground up. Enjoy type safety with auto-completion and compile-time error checking.
  - icon: 🛠️
    title: Powerful CLI
    details: Intuitive command-line interface for building, testing, and deploying your serverless applications.
  - icon: ⚡
    title: Zero Configuration
    details: Sensible defaults that just work. No complex configuration files or setup required to get started.
  - icon: 🔍
    title: Auto-Discovery
    details: Automatically finds your routes and subscribers, turns them into serverless functions, and deploys them without manual wiring.
---

## Example

```ts:line-numbers=1
// functions/api/index.ts
import {http} from "@lumo-framework/core";

export async function GET(request: http.Request) {
    return http.response(http.STATUS_OK).json({
        data: 'Hello from Tamo!,
    });
}
```
