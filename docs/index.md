---
layout: home
title: "tsc.run | A serverless-first platform for TypeScript"
description: "A minimal framework for building serverless applications in TypeScript. It ships with a CLI to deploy your app to AWS, GCP, Cloudflare and more."
hero:
  name: "tsc.run"
  tagline: "Meet Tamo, your new serverless sidekick. tsc.run auto-discovers routes and subscribers, compiles them to cloud-native functions, and deploys to AWS or Cloudflare."
  image:
    light: /tsc-mascot.png
    dark: /tsc-mascot-dark.png
    alt: Tamo - The tsc.run Mascot
  actions:
    - theme: brand
      text: Get Started
      link: /0.7.0-alpha/release-notes
    - theme: alt
      text: View on GitHub
      link: https://github.com/tsc-run

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
import {http} from "@tsc-run/core";

export async function GET(request: http.Request) {
    return http.response(http.STATUS_OK).json({
        data: 'Hello from Tamo!,
    });
}
```
