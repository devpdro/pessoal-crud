# PessoalCrud

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Tailwind CSS

This project is configured to use Tailwind CSS together with PrimeNG and PrimeUIX themes.

### Setup Summary

- Dev dependencies installed: `tailwindcss`, `postcss`, `autoprefixer`.
- Config files added: `tailwind.config.js` and `postcss.config.js`.
- Global stylesheet `src/styles.scss` includes Tailwind layers:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Content Paths

The Tailwind config scans `./src/**/*.{html,ts}`. If you add files elsewhere, update `tailwind.config.js` accordingly.

### PrimeNG Theme

PrimeNG is configured via `providePrimeNG` using the Aura preset from `@primeuix/themes`. Tailwind’s PrimeUI plugin is enabled to ensure proper layering.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
