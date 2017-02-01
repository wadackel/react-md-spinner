Example: Server-Side rendering
==============================

It is an example of spinner in Server-Side Rendering.

![Screenshot](./screenshot.gif)


## Example

The point is to use `ssrBehaviour` and specify `userAgent`.

**Note:** It is a different code from the actual example.

### Client-Side:

```javascript
import React from "react";
import { render } from "react-dom";
import App from "./App";

render(
  <App userAgent={window.navigator.userAgent} />,
  document.getElementById("app")
);
```

### Server-Side:

```javascript
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

### App

```javascript
class App extends Component {
  render() {
    return <MDSpinner
      userAgent={this.props.userAgent}
    />;
  }
}
```


## Available Scripts

In the project directory, you can run:


### `npm start`

Runs the app.
Open `http://localhost:8080` to view it in the browser.


### `npm run build`

Build the client side code. Server-Side uses `babel-node`.

