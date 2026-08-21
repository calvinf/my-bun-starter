# My Bun Starter

Core components:

- [mise](https://mise.jdx.dev/) for [Node.js](https://nodejs.org/) and [Bun](https://bun.sh/)
  - Bun is the package manager
  - [tests](https://bun.sh/guides/test) with `bun:test`
- [hk](https://hk.jdx.dev/) for git hooks (oxlint, oxfmt, and tests)
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) and [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React 19](https://react.dev/)
- [Tailwind 4](https://tailwindcss.com/)

This template provides a minimal setup to get React working in Vite with HMR.

This starter uses [SWC](https://swc.rs/) via [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for Fast Refresh.

## Setup

```sh
mise install
bun install
```

# VS Code

We recommend the [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) extension for linting and formatting, and the [mise](https://marketplace.visualstudio.com/items?itemName=hverlin.mise-vscode) extension for runtimes.
