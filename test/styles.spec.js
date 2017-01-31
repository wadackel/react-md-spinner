/* eslint-disable max-len */
import assert from "power-assert";
import Prefixer from "inline-style-prefixer";
import { getColors, autoPrefixAndNormalizeStyles } from "../src/styles";


const ios6 = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25";


describe("Styles", () => {
  describe("getColors()", () => {
    it("Should be get color 1 ~ 4", () => {
      assert.deepStrictEqual(
        getColors({
          color1: "val1",
          color2: "val2",
          color3: "val3",
          color4: "val4"
        }),
        [
          "val1",
          "val2",
          "val3",
          "val4"
        ]
      );
    });


    it("Should be get singleColor", () => {
      assert.deepStrictEqual(
        getColors({
          singleColor: "single",
          color1: "val1",
          color2: "val2",
          color3: "val3",
          color4: "val4"
        }),
        [
          "single",
          "single",
          "single",
          "single"
        ]
      );
    });
  });


  describe("autoPrefixAndNormalizeStyles()", () => {
    it("Should be get prefixed styles", () => {
      const prefixer = new Prefixer({ userAgent: ios6 });

      assert.deepStrictEqual(
        autoPrefixAndNormalizeStyles(prefixer, {
          display: "flex",
          boxSizing: "border-box",
          transform: "rotate(0)",
          userSelect: "none"
        }), {
          display: "-webkit-box",
          boxSizing: "border-box",
          WebkitTransform: "rotate(0)",
          WebkitUserSelect: "none"
        }
      );
    });


    it("Should be normalized display property", () => {
      const prefixer = new Prefixer({ userAgent: "all" });

      assert.deepStrictEqual(
        autoPrefixAndNormalizeStyles(prefixer, {
          display: "flex"
        }), {
          display: "flex"
        }
      );
    });
  });
});
