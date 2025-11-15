# My Bun Starter

Core components:

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/)
  - package manager
  - [tests](https://bun.sh/guides/test) with `bun:test`
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React 19](https://react.dev/)
- [Tailwind 4](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/)

This template provides a minimal setup to get React working in Vite with HMR.

This starter uses [SWC](https://swc.rs/) via [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for Fast Refresh.

## Biome configuration

The Biome configuration was migrated from an earlier ESLint configuration that used eslint, prettier, and typescript-eslint, and the Tailwind prettier plugin. The `biome.json` can be simplified further particularly as Biome gets better support for CSS and Tailwind.

# VS Code

We recommend Biome and Prettier extensions for VS Code. Biome as it handles our formatting and linting tasks, and Prettier for formatting things Biome doesn't handle.
