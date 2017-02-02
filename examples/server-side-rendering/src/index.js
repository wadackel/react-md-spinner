import React from "react";
import { render } from "react-dom";
import App from "./App";

render(
  <App userAgent={window.navigator.userAgent} />,
  document.getElementById("app")
);
