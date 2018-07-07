# <img src="https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/logo%402x.png" width="400" height="51.5" />

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-md-spinner.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-md-spinner)
[![npm version](https://img.shields.io/npm/v/react-md-spinner.svg?style=flat-square)](http://badge.fury.io/js/react-md-spinner)
[![David](https://img.shields.io/david/tsuyoshiwada/react-md-spinner.svg?style=flat-square)](https://david-dm.org/tsuyoshiwada/react-md-spinner/)

Material Design spinner components for React.js.

[![DEMO Screen Shot](https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/screenshot.gif)](https://tsuyoshiwada.github.io/react-md-spinner/)

See demo page: https://tsuyoshiwada.github.io/react-md-spinner/


## Table of Contents

* [Install](#install)
* [Features](#features)
* [Getting started](#getting-started)
    - [Basic Usage](#basic-usage)
    - [Server-Side Rendering](#server-side-rendering)
* [API](#api)
    - [Props](#props)
    - [ssrBehavior](#ssrbehavior)
* [License](#license)
* [ChangeLog](#changelog)
* [Development](#development)
* [Contribution](#contribution)
* [Author](#author)



## Install

You can install the [react-md-spinner](https://www.npmjs.com/package/react-md-spinner) from [npm](https://www.npmjs.com/).

```bash
$ npm install react-md-spinner
```


## Features

* You can start using with zero configuration!
* Support to change of color, size, border and animation speed.
* It can also be used in single color.
* Support Server-Side Rendering.


## Getting started

### Basic Usage

Because it is made of 100% inline styles, you can start using it right away without setting.

```javascript
import React, { Component } from "react";
import MDSpinner from "react-md-spinner";

export default class SpinnerExample extends Component {
  render() {
    return (
      <div>
        <MDSpinner />
      </div>
    );
  }
}
```


### Server-Side Rendering

The following is an example of Server-Side Rendering.

Please checkout [examples](./examples/) directory for details.

The point is to use `ssrBehavior` and specify `userAgent`.

**Note:** It is a different code from the actual example.

#### Examples

**Client-Side:**

```javascript
import React from "react";
import { render } from "react-dom";
import App from "./App";

render(
  <App userAgent={window.navigator.userAgent} />,
  document.getElementById("app")
);
```

**Server-Side:**

```javascript
import { ssrBehavior } from "react-md-spinner";

// ...

const html = (root, userAgent) => `<!DOCTYPE html>
  <html lang="en">
  <head>
    ${ssrBehavior.getStylesheetString(userAgent)}
  </head>
  <body>
    <div id="app">${renderToString(root)}</div>
    <script src="./bundle.js"></script>
  </body>
</html>`;

app.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"];

  res.status(200).send(html(
    <App userAgent={userAgent} />,
    userAgent
  ));
});
```

**App:**

```javascript
class App extends Component {
  render() {
    return <MDSpinner
      userAgent={this.props.userAgent}
    />;
  }
}
```


## API

### Props

You can set the following properties.

| Property      | Type               | Default                               | Description                                                                                                                                  |
|:--------------|:-------------------|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| `className`   | `string`           | `undefined`                           | Set the `className` for the component.                                                                                                       |
| `style`       | `object`           | `undefined`                           | Set the root element style in the component.                                                                                                 |
| `size`        | `number`, `string` | `28`                                  | Set the size (diameter) of the spinner circle.                                                                                               |
| `borderSize`  | `number`           | `Custom formula from size`            | Set the spinner border size of.                                                                                                              |
| `duration`    | `number`           | `1333`                                | Set the animation duration (ms) of the spinner.                                                                                              |
| `color1`      | `string`           | ![color1][color1] `rgb(66, 165, 245)` | The color of the spinner. Can be set to any valid CSS string (hex, rgb, rgba).                                                               |
| `color2`      | `string`           | ![color2][color2] `rgb(239, 83, 80)`  | Same as above                                                                                                                                |
| `color3`      | `string`           | ![color3][color3] `rgb(253, 216, 53)` | Same as adove                                                                                                                                |
| `color4`      | `string`           | ![color4][color4] `rgb(76, 175, 80)`  | Same as adove                                                                                                                                |
| `singleColor` | `string`           | `undefined`                           | Same as adove. Use this if the spinner should be in only one single color. The settings (props) for `color1` ~ `4` will be ignored by setting this `singleColor` property.                                               |
| `userAgent`   | `string`           | `undefined`                           | Set the value of the current User Agent when generating inline styles, so that server-rendered markup is identical to client-rendered markup |

[color1]:https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/color1.png
[color2]:https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/color2.png
[color3]:https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/color3.png
[color4]:https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/color4.png



### ssrBehavior

In Server-Side Rendering you need to inject `@keyframes` inside the `<head>`.  
`react-md-spinner` provides utilities to handle them.

#### API

* `ssrBehavior.getStylesheetString([userAgent: string]): string`
* `ssrBehavior.getStylesheetComponent([userAgent: string]): React.Component`

#### As string output

```javascript
import { ssrBehavior } from "react-md-spinner";

const html = userAgent => `<!DOCTYPE html>
  <head>
    ${ssrBehavior.getStylesheetString(userAgent)}
  </head>
  <body>
    <div id="app">
      // React stuff here
    </div>
  </body>
</html>`;

// ...

html(/* User-Agent */);
```

#### As React Components

```javascript
import { ssrBehavior } from "react-md-spinner";

const HTML = userAgent => (
  <html>
    <head>
      {ssrBehavior.getStylesheetComponent(userAgent)}
    </head>
    <body>
      <div id="app">
        // React stuff here
      </div>
    </body>
  </html>
);

// ...

HTML(/* User-Agent */);
```



## License

Released under the [MIT License](./LICENSE)



## ChangeLog

See [CHANGELOG.md](./CHANGELOG.md)



## Development

Initialization of the project.

```bash
$ cd /your/project/dir
$ git clone https://github.com/tsuyoshiwada/react-md-spinner.git
```

Install some dependencies.

```bash
$ npm install
```

Start the development and can you see demo page (access to the `http://localhost:3000/`).

```bash
$ npm start
```

Run lint and testing.

```bash
$ npm test
```

Generates build file.

```bash
$ npm run build
```


## Contribution

Thank you for your interest in react-md-spinner.js.  
Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/react-md-spinner/issues).

**Before you open a PR:**

Be careful to follow the code style of the project. Run `npm test` after your changes and ensure you do not introduce any new errors or warnings.
All new features and changes need documentation.

Thanks!



## Author

[tsuyoshiwada](https://github.com/tsuyoshiwada)

