# bootstrap-nextjs-ts-materialui

Bootstrap project with nextjs + typescript + material-ui + eslint + prettier

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app --typescript`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the application in development mode with hot-code reloading, error reporting, and more:<br />

The application will start at http://localhost:3000 by default. The default port can be changed with -p, like so: **npx next dev -p 4000**

### `npm run build`

Creates an optimized production build of your application. The output displays information about each route.

-Size – The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.
-First Load JS – The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.

### `npm run start`

Starts the application in production mode. The application should be compiled with next build first.

The application will start at http://localhost:3000 by default. The default port can be changed with -p, like so: **npx next dev -p 4000**

### `npm run test`

Runs all tests.

### `npm run test-watch`

Launches the test runner in the interactive watch mode. Watch files for changes and re-run tests related to changed files.

### `npm run lint`

Identifies and reports on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

Files where errors are present is listed.
For each file the list of errors and warning are shown along with the line numbers and the rule that is broken

At the end totals number of erros and warnings are shown

Configuration for `eslint` can be found in `.eslintrc.json` file

Use a `.eslintignore` file to ignore files on which you do not wish to run eslint.

### `npm run lint:fix`

This option instructs ESLint to try to fix as many issues as possible. The fixes are made to the actual files themselves and only the remaining unfixed issues are output. Not all problems are fixable using this option.

### `npm run format`

This command formats all files supported by Prettier in the current directory and its subdirectories.

It’s recommended to always make sure that the only formats what you want in your project. Use a `.prettierignore` file to ignore things that should not be formatted.
