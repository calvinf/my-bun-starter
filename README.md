# My Bun Starter

Core components:

- [Bun](https://bun.sh/)
  - package manager, bundler, and dev server (`Bun.serve` with HTML imports)
  - [tests](https://bun.sh/guides/test) with `bun:test`
- [TypeScript](https://www.typescriptlang.org/)
- [React 19](https://react.dev/)
- [Tailwind 4](https://tailwindcss.com/) via [bun-plugin-tailwind](https://bun.sh/docs/bundler/fullstack#tailwind-css)

This template runs entirely on Bun's built-in full-stack dev server: `index.html` is imported directly into `src/backend.ts` and passed to `Bun.serve()`, which bundles the frontend (TS/JSX, Tailwind, HMR with React Fast Refresh) on the fly — no separate bundler config needed.

## Scripts

- `bun run dev` — start the dev server with hot reload (`localhost:5173`)
- `bun run build` — typecheck the project
- `bun start` — run the server in production mode (minified, cached assets)
- `bun test` — run the test suite

# VS Code

We recommend the Prettier extension for VS Code.
