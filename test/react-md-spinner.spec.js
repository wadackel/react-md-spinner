import assert from "power-assert";
import React from "react";
import { mount } from "enzyme";
import MDSpinner from "../src/";


describe("MDSpinner", () => {
  describe("Props", () => {
    it("Should be allowed set basic props", () => {
      const wrapper = mount(
        <MDSpinner
          className="test-md-spinner"
          style={{
            margin: 30,
            verticalAlign: "top"
          }}
        />
      );

      const span = wrapper.find("span.test-md-spinner");
      assert(span.length === 1);

      const style = span.prop("style");
      assert(style.margin === 30);
      assert(style.verticalAlign === "top");

      wrapper.unmount();
    });


    it("Should be allowed set custom props", () => {
      const wrapper = mount(
        <MDSpinner
          size={120}
          duration={100}
          color1="rgb(0, 0, 0)"
          color2="rgb(0, 0, 1)"
          color3="rgb(0, 1, 1)"
          color4="rgb(1, 1, 1)"
        />
      );

      const span = wrapper.find(MDSpinner).find("span").at(0);
      const style = span.prop("style");

      const { animation, width, height } = style;
      assert(Math.round(animation.match(/((?:[1-9]\d*|0)(?:\.\d+)?)ms/)[1]) === 118); // 360 * 100 / (216 + (360 - 270))
      assert((width === 120 && height === 120) === true);

      const layers = span.children();
      assert(layers.at(0).prop("style").borderColor === "rgb(0, 0, 0)");
      assert(layers.at(1).prop("style").borderColor === "rgb(0, 0, 1)");
      assert(layers.at(2).prop("style").borderColor === "rgb(0, 1, 1)");
      assert(layers.at(3).prop("style").borderColor === "rgb(1, 1, 1)");

      wrapper.unmount();
    });


    it("Should be allowed size numeric string", () => {
      const wrapper = mount(
        <MDSpinner
          size="80"
        />
      );

      const span = wrapper.find(MDSpinner).find("span").at(0);
      const style = span.prop("style");
      const { width, height } = style;

      assert((width === 80 && height === 80) === true);

      wrapper.unmount();
    });


    it("Should be allowed set singleColor", () => {
      const wrapper = mount(
        <MDSpinner
          singleColor="rgb(255, 255, 255)"
          color1="rgb(0, 0, 0)"
          color2="rgb(0, 0, 0)"
          color3="rgb(0, 0, 0)"
          color4="rgb(0, 0, 0)"
        />
      );
      const span = wrapper.find(MDSpinner).find("span").at(0);
      const layers = span.children();

      assert(layers.at(0).prop("style").borderColor === "rgb(255, 255, 255)");
      assert(layers.at(1).prop("style").borderColor === "rgb(255, 255, 255)");
      assert(layers.at(2).prop("style").borderColor === "rgb(255, 255, 255)");
      assert(layers.at(3).prop("style").borderColor === "rgb(255, 255, 255)");

      wrapper.unmount();
    });


    it("Should be allowed set border size", () => {
      const wrapper = mount(
        <MDSpinner
          size="80"
          borderSize={7}
        />
      );

      const span = wrapper.find(MDSpinner).find("span").at(5);
      const style = span.prop("style");
      const { borderWidth } = style;

      assert((borderWidth === 7) === true);
      wrapper.unmount();
    });
  });


  describe("Keyframes", () => {
    const getStyleNodeLength = () => (
      document.head.querySelectorAll("style[data-keyframes]").length
    );


    it("Should be register/unregister @keyframes when willMount/willUnmount triggered", () => {
      assert(getStyleNodeLength() === 0);

      const wrapper1 = mount(<MDSpinner />);
      assert(getStyleNodeLength() === 8);

      const wrapper2 = mount(<MDSpinner />);
      assert(getStyleNodeLength() === 8);

      const wrapper3 = mount(<MDSpinner />);
      assert(getStyleNodeLength() === 8);

      wrapper1.unmount();
      assert(getStyleNodeLength() === 8);

      wrapper2.unmount();
      assert(getStyleNodeLength() === 8);

      wrapper3.unmount();
      assert(getStyleNodeLength() === 0);
    });
  });
});
