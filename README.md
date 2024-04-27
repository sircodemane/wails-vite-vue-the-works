# Wails + Vue 3 Typescript (The Works)

## ARCHIVED NOTICE

This Wails template has been archived and is no longer maintained. I intend to develop a new template in the future.

## About

This is a Wails template project with Vue 3 and TypeScript, using Vite for
asset bundling. It comes packed with the following features:
- Vite
- Vue 3 + TypeScript
- Vuex
- Vue Router
- Sass support
- ESLint + Prettier

If this has way more than you need, please check out my
[simple Vite + Vue3 TypeScript template](https://github.com/codydbentley/wails-vite-vue-ts).
It comes with instructions to only add the features you want. 

## Live Development

To run in live development mode, run `wails dev` in the project directory. In another terminal, go into the `frontend`
directory and run `npm run dev`. Navigate to http://localhost:34115
in your browser to connect to your application.

Note: Typechecking is disabled. If you want to do type checking, use `npm run type-check`

## Building

To build this project in debug mode, use `wails build`. For production, use `wails build -production`.
To generate a platform native package, add the `-package` flag.

## Known Issues

- When making changes to the frontend, the browser reload will often happen too fast, causes issues. A refresh will fix the page.
- Typechecking is turned off due to Wails depending on the frontend to build before it will compile the backend and generate bindings.
- If you find any other problems, please create an issue.
