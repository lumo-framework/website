# Deployment

Lumo Framework applications deploy as serverless functions to cloud platforms. The CLI handles the entire deployment process, from building your TypeScript code to configuring cloud resources.

## Important Cost Notice

**Lumo Framework creates cloud resources on your behalf but is not responsible for any costs incurred.** You are solely responsible for all charges from your cloud provider. Always review your cloud provider's pricing documentation and monitor your usage to avoid unexpected costs.

## General Deployment

Deploy your application using the Lumo Framework CLI:

```bash
lumo deploy
```

The deployment process:
1. Builds your TypeScript functions
2. Packages them for the target platform
3. Creates or updates cloud resources
4. Configures routing and permissions

## Resources Created

### AWS Resources

When deploying to AWS, Lumo Framework creates:

- **Lambda Functions** - For each API route and subscriber
- **API Gateway** - HTTP API for routing requests to Lambda functions
- **IAM Roles** - Execution roles for Lambda functions with minimal required permissions
- **CloudWatch Log Groups** - For function logging and monitoring
- **VPC** - Virtual Private Cloud with private and public subnets

### Cloudflare Resources

When deploying to Cloudflare, Lumo Framework creates:

- **Workers** - For each function in your application
- **Routes** - For mapping URLs to Workers
- **KV Namespaces** (if configured) - For key-value storage

## AWS Deployment

### Prerequisites

- AWS account with appropriate permissions
- AWS credentials configured

### Environment Variables

Set these environment variables or GitHub secrets:

**Option 1: Access Keys**
- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
- `AWS_REGION` - Target AWS region (e.g., `eu-west-2`)

**Option 2: OIDC (Recommended)**
- `AWS_ROLE_ARN` - IAM role ARN for OIDC authentication
- `AWS_REGION` - Target AWS region

### GitHub Actions

#### Using Access Keys

```yaml
name: Deploy to AWS (Access Key/Secret)

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          
      - run: npm ci
      
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: eu-west-2
          
      - run: npx @lumo-framework/cli build
      - run: npx @lumo-framework/cli deploy
```

#### Using OIDC (Recommended)

```yaml
name: Deploy to AWS (OIDC)

on:
  push:
    branches: [ main ]

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          
      - run: npm ci
      
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
          role-session-name: GitHubActions
          aws-region: eu-west-2
          
      - run: npx @lumo-framework/cli build
      - run: npx @lumo-framework/cli deploy
```

## Cloudflare Deployment

### Prerequisites

- Cloudflare account
- Cloudflare API token with appropriate permissions

### Environment Variables

- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

### GitHub Actions

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          
      - run: npm ci
      
      - run: npx @lumo-framework/cli build
      - run: npx @lumo-framework/cli deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```
