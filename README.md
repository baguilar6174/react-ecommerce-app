# React Ecommerce App

## Proyect structure

- api: exported API request declarations and api hooks related to a specific feature
- assets: assets folder can contain all the static files such as images, fonts, etc.
- components: shared components used across the entire application
- config: all the global configuration, env variables etc. get exported from here and used in the app
- features: feature based modules
- hooks: shared hooks used across the entire application
- lib: re-exporting different libraries preconfigured for the application
- providers: all of the application providers
- routes: routes configuration
- stores: global state stores
- test: test utilities and mock server
- types: base types used across the application
- utils: shared utility functions

## Build with

- Vite
- React JS 18
- Bootstrap 5

## Dev features

- Project structure
- Eslint
- Prettier
- SCSS
- Alias paths
- use .nvmrc and .npmrc files
- Husky (precommit and prepush)
- Commit standard with commitlint

## TODO

- Verify eslint rules for imports with alias in .eslintrc.cjs
- Environment variables
- Atomic design
- Testing (Jest)
- Redux
- Routing using lazy loading
- Use axios (implement interceptor)
- Internationalization
- Load images
