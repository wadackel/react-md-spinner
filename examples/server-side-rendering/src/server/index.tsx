import * as path from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ssrBehavior } from "../../../../src";
import { App } from "../App";

// You can try out the output of the component if setting it to `true`.
const USE_COMPONENT = false;

const PORT = 8080;

// for rendering as string.
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

// for rendering as component.
const Html = (root: JSX.Element) =>
  renderToString(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {ssrBehavior.getStylesheetComponent()}
      </head>
      <body>
        <div id="app">{root}</div>
        <script defer src="/client.js" />
      </body>
    </html>
  );

// React with Express Server-Side rendering example.
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  const renderer = USE_COMPONENT ? Html : html;

  res.status(200).send(`<!doctype html>${renderer(<App />)}`);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`ReactMDSpinner SSR Example: Listening on port ${PORT}`);
});
