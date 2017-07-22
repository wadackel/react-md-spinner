import { Component } from "react";

export interface MDSpinnerProps {
  className?: string,
  userAgent?: string,
  style?: object,
  singleColor?: string,
  size?: number | string,
  duration?: number,
  color1?: string,
  color2?: string,
  color3?: string,
  color4?: string
}

export default class MDSpinner extends Component<MDSpinnerProps, {}> {
  /* explicitly empty */
}

declare namespace ssrBehavior {
  export function getStylesheetString(userAgent?: string): string;
  export function getStylesheetComponent(userAgent?: string): Component<{}, {}>;
}
