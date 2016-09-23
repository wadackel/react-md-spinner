<img src="https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/logo%402x.png" width="400" height="51.5" />
================

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-md-spinner.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-md-spinner)
[![npm version](https://img.shields.io/npm/v/react-md-spinner.svg?style=flat-square)](http://badge.fury.io/js/react-md-spinner)
[![David](https://img.shields.io/david/tsuyoshiwada/react-md-spinner.svg?style=flat-square)](https://david-dm.org/tsuyoshiwada/react-md-spinner/)
[![David - dev](https://img.shields.io/david/dev/tsuyoshiwada/react-md-spinner.svg?style=flat-square)](https://david-dm.org/tsuyoshiwada/react-md-spinner/#info=devDependencies&view=table)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/master/LICENSE)

Material Design spinner components for React.js.

[![DEMO Screen Shot](https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/screenshot.gif)](https://tsuyoshiwada.github.io/react-md-spinner/)

See demo page: https://tsuyoshiwada.github.io/react-md-spinner/


## INSTALL

You can install the [react-md-spinner](https://www.npmjs.com/package/react-md-spinner) from [npm](https://www.npmjs.com/).

```bash
$ npm install react-md-spinner
```


## USAGE

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


## PROPS

You can set the following properties.

| Property      | Type           | Default                                                                                                        | Description                                                                                                                                         |
|:--------------|:---------------|:---------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| `className`   | string         | undefined                                                                                                      | Set the `className` for the component.                                                                                                              |
| `style`       | object         | undefined                                                                                                      | Set the root element style in the component.                                                                                                        |
| `size`        | number, string | 28                                                                                                             | Set the spinner size of.                                                                                                                            |
| `duration`    | number         | 1333                                                                                                           | Set the spinner of the animation duration.                                                                                                          |
| `color1`      | string         | ![color1](https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/color1.png) rgb(66, 165, 245) | The color of spinner to set the CSS valid string.                                                                                                   |
| `color2`      | string         | ![color2](https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/color2.png) rgb(239, 83, 80)  | Same as above                                                                                                                                       |
| `color3`      | string         | ![color3](https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/color3.png) rgb(253, 216, 53) | Same as adove                                                                                                                                       |
| `color4`      | string         | ![color4](https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/images/color4.png) rgb(76, 175, 80)  | Same as adove                                                                                                                                       |
| `singleColor` | string         | undefined                                                                                                      | Same as adove. Designation of color1 ~ 4 by setting the singleColor property is ignored.                                                            |
| `userAgent`   | string         | undefined                                                                                                      | Set the value of the current User Agent when generating inline styles, so that server-rendered markup is identical to client-rendered markup |



## LICENCE

Released under the [MIT Licence](https://raw.githubusercontent.com/tsuyoshiwada/react-md-spinner/master/LICENSE)



## AUTHOR

[tsuyoshiwada](https://github.com/tsuyoshiwada)



## DEVELOPMENT

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


## CONTRIBUTION

Thank you for your interest in react-md-spinner.js.  
Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/react-md-spinner/issues).

**Before you open a PR:**

Be careful to follow the code style of the project. Run `npm test` after your changes and ensure you do not introduce any new errors or warnings.
All new features and changes need documentation.

Thanks!
