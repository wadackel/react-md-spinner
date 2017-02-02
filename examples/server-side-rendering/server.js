/* eslint-disable no-console */
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ssrBehavior } from "../../";
import App from "./src/App";

const PORT = 8080;


// You can try out the output of the component if setting it to `true`.
const useComponent = false;


// React with Express Server-Side rendering example.
const app = express();

app.use(express.static("dist"));


// For rendering string.
const html = (root, userAgent) => `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ${ssrBehavior.getStylesheetString(userAgent)}
  </head>
  <body>
    <div id="app">${renderToString(root)}</div>
    <script src="./bundle.js"></script>
  </body>
</html>`;


// For rendering component.
const HTML = (root, userAgent) => renderToString(
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {ssrBehavior.getStylesheetComponent(userAgent)}
    </head>
    <body>
      <div id="app">{root}</div>
      <script src="./bundle.js"></script>
    </body>
  </html>
);


// Note:
// It clears the validation of React by using
// same userAgent on server-side and client-side.
app.get("/", (req, res) => {
  const renderer = useComponent ? HTML : html;
  const userAgent = req.headers["user-agent"];

  res.status(200).send(renderer(
    <App userAgent={userAgent} />,
    userAgent
  ));
});


// Listening on port 8080
app.listen(PORT, () => {
  console.log(`ReactMDSpinner SSR Example: Listening on port ${PORT}`);
});
