# Remora

### Pre-requisites

- Node.js v12+
- Yarn package manager

## Development

Step 0. Read `DOCS.md` in the root of the project

Step 1. Rename `.env.example` and copy the contents of `.env` to `.env.local`

```bash
cp .env .env.local
```

Step 2. Fill out the `.env.local`.

Step 3. Install dependencies

```bash
yarn install
yarn typechain
```

Step 4. Start the development server

```bash
yarn dev
```

Step 5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Add your contract

Step 1. Add your contract ABI to `abi` dir
Step 2. Run `yarn typechain` to generate typings for your contract
Step 3. Run `yarn dev`

### Environment variables

This project uses publicRuntimeConfig in the [next.config.js](./next.config.js) and getServerSideProps on the pages (function may be empty, but it forces Next.js to switch to Server-Side Rendering mode). This is necessary to quickly start the docker container without rebuilding the application. More on that in `DOCS.md`.

Read more about [runtime configuration](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) and [automatic static optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)

### Content-Security-Policy

In order to improve security, this template includes a Content-Security-Policy boilerplate. Please make sure to customize the policies in [utils/withCsp.ts](utils/withCsp.ts) before shipping the application to production. Learn more about it in [DOCS](/DOCS.md#monitoring).

## Production

```bash
yarn build && yarn start
```
