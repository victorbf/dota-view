# dota-view

Basic React + Vite + TypeScript app with:

- Tailwind CSS setup
- Client routing (`/` welcome page and `/list` list page)
- SSR entry point (`src/entry-server.tsx`)
- Oxlint linting
- Vitest + Testing Library tests

## Components

- `Title`: shared page title component
- `Card`: reusable hero card with name, description, and attributes

## Pages

- `WelcomePage`: app landing page
- `ListPage`: renders three mocked hero cards

## Scripts

- `npm run dev` - start development server
- `npm run dev:no-mock` - start development server without MSW mock
- `npm run build` - build client bundle
- `npm run build:ssr` - build client + SSR bundle
- `npm run lint` - run lint checks
- `npm run test` - run tests in watch mode
- `npm run test:run` - run tests once
