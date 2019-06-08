import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import MDSpinner from "../src";

describe("<MDSpinner />", () => {
  afterEach(cleanup);

  test("Shold be inject/uninject `@keyframes` when cDM/cWU triggered", () => {
    expect(document.head.children).toHaveLength(0);

    const { unmount: unmount1 } = render(<MDSpinner />);

    expect(document.head.children).toHaveLength(1);
    expect(document.head.children[0]).toHaveAttribute("data-react-md-spinner");

    const { unmount: unmount2 } = render(<MDSpinner />);

    expect(document.head.children).toHaveLength(1);
    expect(document.head.children[0]).toHaveAttribute("data-react-md-spinner");

    unmount1();

    expect(document.head.children).toHaveLength(1);
    expect(document.head.children[0]).toHaveAttribute("data-react-md-spinner");

    unmount2();

    expect(document.head.children).toHaveLength(0);
  });
});
