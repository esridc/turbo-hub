# Turbo Hub

Test repo containing:

- ember 3.28 app
- stencil component lib
- typescript lib
- other default turbo repo packages / apps - not used

## Goal

Be able to develop on the library, stencil components and ember at the same time and have everything auto-rebuild and refresh.

### Status

At this point, changes in the lib, cause rebuilds of the component and the ember app. However, the updated lib functions are only reflected in the ember app - although the component rebuilds, it does not pick up the updated version of the function from the lib.

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm run dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
