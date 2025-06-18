# Server
## Step 1 Setup Server

```bash
npm init -y
npm install express
```

## Step 2 Basic middlewares

```bash
npm install cors morgan nodemon
```

## Step 3 Prisma

```bash
npm install prisma
npx prisma init --datasource-provider mysql
npx prisma migrate dev --name init
npm install @prisma/client
```

## Step 4 Authenticate

```bash
npm install bcryptjs jsonwebtoken
```

## For TypeScript

Don't forget to run `tsc --init` to generate tsconfig.json

## Please install the dev dependencies as following

```bash
npm install --save-dev typescript
npm install --save-dev tsx
npm install --save-dev @types/express
npm install --save-dev @types/cors
npm install --save-dev @types/jsonwebtoken
```