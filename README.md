# react-md-spinner

![Screenshot](./docs/images/repo-banner.gif)

[![Build Status](https://dev.azure.com/wadackel/react-md-spinner/_apis/build/status/tsuyoshiwada.react-md-spinner?branchName=master)](https://dev.azure.com/wadackel/react-md-spinner/_build/latest?definitionId=1&branchName=master)
[![npm version](https://img.shields.io/npm/v/react-md-spinner.svg)](https://www.npmjs.com/package/react-md-spinner)

> Material Design spinner components for React.js.

Live example: https://tsuyoshiwada.github.io/react-md-spinner/

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Basic Usage](#basic-usage)
  - [Server-Side Rendering](#server-side-rendering)
    - [Example](#example)
- [Props](#props)
  - [`size`](#size)
  - [`borderSize`](#bordersize)
  - [`duration`](#duration)
  - [`color1`](#color1)
  - [`color2`](#color2)
  - [`color3`](#color3)
  - [`color4`](#color4)
  - [`singleColor`](#singlecolor)
- [API](#api)
  - [`ssrBehavior`](#ssrbehavior)
    - [As string output](#as-string-output)
    - [As React Components](#as-react-components)
- [ChangeLog](#changelog)
- [Contributing](#contributing)
- [Available Scripts](#available-scripts)
  - [`yarn test`](#yarn-test)
  - [`yarn lint`](#yarn-lint)
  - [`yarn format`](#yarn-format)
  - [`yarn build`](#yarn-build)
  - [`yarn storybook`](#yarn-storybook)
- [License](#license)

## Installation

You can install the [react-md-spinner](https://www.npmjs.com/package/react-md-spinner) from [npm](https://www.npmjs.com/).

```bash
$ npm i -S react-md-spinner
# or
$ yarn add react-md-spinner
```

## Features

- :rocket: You can start using with zero configuration!
- :wrench: Support to change of color, size, border and animation speed.
- :sparkling_heart: It can also be used in single color.
- :globe_with_meridians: Support Server-Side Rendering.

## Getting Started

### Basic Usage

Because it is made of 100% inline styles, you can start using it right away without setting.

```typescript
import React from "react";
import MDSpinner from "react-md-spinner";

export const SpinnerExample: React.FC = () => (
  <div>
    <MDSpinner />
  </div>
);
```

### Server-Side Rendering

The following is an example of Server-Side Rendering.  
Please checkout [examples](./examples/) directory for details.

The point is to use `ssrBehavior`.

#### Example

**Note:** The following is pseudo code.

**Client-Side:**

```typescript
import React from "react";
import { render } from "react-dom";
import App from "./App";

render(<App />, document.getElementById("app"));
```

**Server-Side:**

```typescript
import { ssrBehavior } from "react-md-spinner";

// ...

const html = (root: JSX.Element) => `<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ${ssrBehavior.getStylesheetString()}
  </head>
  <body>
    <div id="app">${renderToString(root)}</div>
    <script defer src="/client.js"></script>
  </body>
</html>`;

app.get("/", (_req, res) => {
  res.status(200).send(`<!doctype html>${renderer(<App />)}`);
});
```

**App:**

```typescript
import React from "react";
import MDSpinner from "react-md-spinner";

export const App: React.FC = () => (
  <div>
    <MDSpinner />
  </div>
);
```

## Props

You can use the following Props. All Props are Optional!

### `size`

**type:** `number`  
**default:** `28`

Set the size (diameter) of the spinner circle.

### `borderSize`

**type:** `number`  
**default:** `undefined`

Set the spinner border size of. By default, the appropriate size is calculated according to the value of `size`.

### `duration`

**type:** `number`  
**default:** `1333`

Set the animation duration (ms) of the spinner.

### `color1`

**type:** `string`  
**default:** !`rgb(66, 165, 245)`

The color of the spinner. Can be set to any valid CSS string (hex, rgb, rgba).

### `color2`

**type:** `string`  
**default:** `rgb(239, 83, 80)`

Same as above.

### `color3`

**type:** `string`  
**default:** `rgb(253, 216, 53)`

Same as above.

### `color4`

**type:** `string`  
**default:** `rgb(76, 175, 80)`

Same as above.

### `singleColor`

**type:** `string`  
**default:** `undefined`

Same as above. Use this if the spinner should be in only one single color. The settings (props) for `color1` ~ `4` will be ignored by setting this `singleColor` property.

## API

### `ssrBehavior`

In Server-Side Rendering you need to inject `@keyframes` inside the `<head>`.  
`react-md-spinner` provides utilities to handle them.

- `ssrBehavior.getStylesheetString(): string`
- `ssrBehavior.getStylesheetComponent(): React.ReactNode`

#### As string output

```typescript
import { ssrBehavior } from "react-md-spinner";

const html = () => `<!doctype html>
  <head>
    ${ssrBehavior.getStylesheetString()}
  </head>
  <body>
    <div id="app">
      // React stuff here
    </div>
  </body>
</html>`;
```

#### As React Components

```typescript
import React from "react";
import { ssrBehavior } from "react-md-spinner";

const Html: React.FC = () => (
  <html>
    <head>{ssrBehavior.getStylesheetComponent()}</head>
    <body>
      <div id="app">{/* React stuff here */}</div>
    </body>
  </html>
);
```

## ChangeLog

See [CHANGELOG.md](./CHANGELOG.md)

## Contributing

We are always welcoming your contribution :clap:

1. Fork (https://github.com/tsuyoshiwada/react-md-spinner) :tada:
1. Create a feature branch :coffee:
1. Run test suite with the `$ yarn test` command and confirm that it passes :zap:
1. Commit your changes :memo:
1. Rebase your local changes against the `master` branch :bulb:
1. Create new Pull Request :love_letter:

## Available Scripts

### `yarn test`

Run unit test using Jest.

### `yarn lint`

Run Lint of source code using ESLint.

### `yarn format`

Run formatting using Prettier and ESLint's Fixer.

### `yarn build`

Run build of TypeScript code.

### `yarn storybook`

Run Storybook.

## License

[MIT © tsuyoshiwada](./LICENSE)
