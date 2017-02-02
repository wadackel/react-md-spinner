/* eslint-disable max-len */
import assert from "power-assert";
import React from "react";
import { mount } from "enzyme";
import { ssrBehavior } from "../src/";


const ios6 = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25";


describe("ssrBehavior", () => {
  describe("getStylesheetString()", () => {
    it("Should be get stylesheet string", () => {
      const str = ssrBehavior.getStylesheetString();

      assert(typeof str === "string");
      assert(/<style type="text\/css" /.test(str));
      assert(/data-keyframes="__react-md-spinner-animation__.+"/.test(str));
      assert(/@keyframes/.test(str));
    });


    it("Should be get prefixed stylesheet string", () => {
      const str = ssrBehavior.getStylesheetString(ios6);

      assert(typeof str === "string");
      assert(/<style type="text\/css" /.test(str));
      assert(/data-keyframes="__react-md-spinner-animation__.+"/.test(str));
      assert(/@-webkit-keyframes/.test(str));
    });
  });


  describe("getStylesheetComponent()", () => {
    it("Should be get stylesheet component", () => {
      const res = ssrBehavior.getStylesheetComponent();
      const wrapper = mount(<head>{res}</head>);

      assert(wrapper.find("style[type='text/css']").length === 8);

      const style = wrapper.find("style[data-keyframes='__react-md-spinner-animation__root-rotate']");
      assert(/@keyframes/.test(style.html()));
    });


    it("Should be get prefixed stylesheet component", () => {
      const res = ssrBehavior.getStylesheetComponent(ios6);
      const wrapper = mount(<head>{res}</head>);

      assert(wrapper.find("style[type='text/css']").length === 8);

      const style = wrapper.find("style[data-keyframes='__react-md-spinner-animation__root-rotate']");
      assert(/@-webkit-keyframes/.test(style.html()));
    });
  });
});
