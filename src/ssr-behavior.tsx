import React from "react";
import { STYLE_DATA_NAME } from "./constants";
import { keyframes } from "./styles/keyframes";

export const getStylesheetString = (): string =>
  `<style type="text/css" data-${STYLE_DATA_NAME}="">${keyframes}</style>`;

export const getStylesheetComponent = (): React.ReactNode =>
  React.createElement("style", {
    type: "text/css",
    [`data-${STYLE_DATA_NAME}`]: "",
    dangerouslySetInnerHTML: {
      __html: keyframes
    }
  });
