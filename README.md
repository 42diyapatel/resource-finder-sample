# VESTA Resource Finder

Small React + TypeScript app for browsing the partner service directory.

## Running it

```
npm install
npm run dev
```

## Other commands

```
npm test         # run the unit tests once
npm run test:watch
npm run typecheck
```

## Layout

```
src/
  components/   presentational components
  data/         the resource directory and its category labels
  lib/          pure helpers, each with a matching .test.ts
  styles/       design tokens and global layout
  types.ts      shared types
```

## Conventions

- All colour, spacing and radius values live in `src/styles/tokens.css`. Component CSS
  refers to them with `var(--token-name)` and does not hardcode values.
- Logic that can be tested without rendering belongs in `src/lib` as a pure function.
- Component files are named after the component and export it as the default.
