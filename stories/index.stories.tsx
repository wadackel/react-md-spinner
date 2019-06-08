import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import MDSpinner from "../src";

const space = <span style={{ margin: "0 8px" }} />;

storiesOf("MDSpinner", module)
  .add("with default", () => <MDSpinner />)
  .add("with pass basic props", () => (
    <MDSpinner
      className="my-spinner"
      style={{ margin: 120 }}
      aria-label="Loading..."
      onClick={action("onClick")}
    />
  ))
  .add("with sizes", () => (
    <>
      <MDSpinner size={16} />
      {space}
      <MDSpinner size={30} />
      {space}
      <MDSpinner size={50} />
      {space}
      <MDSpinner size={70} />
      {space}
      <MDSpinner size={100} />
    </>
  ))
  .add("with border sizes", () => (
    <>
      <MDSpinner size={70} borderSize={1} />
      {space}
      <MDSpinner size={70} borderSize={3} />
      {space}
      <MDSpinner size={70} borderSize={5} />
      {space}
      <MDSpinner size={70} borderSize={7} />
      {space}
      <MDSpinner size={70} borderSize={10} />
    </>
  ))
  .add("with durations", () => (
    <>
      <MDSpinner duration={500} />
      {space}
      <MDSpinner duration={1333} />
      {space}
      <MDSpinner duration={2000} />
    </>
  ))
  .add("with custom colors", () => (
    <MDSpinner
      color1="#e91e63"
      color2="#673ab7"
      color3="#009688"
      color4="#ff5722"
    />
  ))
  .add("with single color", () => <MDSpinner singleColor="#03a9f4" />);
