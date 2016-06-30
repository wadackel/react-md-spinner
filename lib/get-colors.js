"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getColors;
function getColors(props) {
  var singleColor = props.singleColor;
  var color1 = props.color1;
  var color2 = props.color2;
  var color3 = props.color3;
  var color4 = props.color4;


  return singleColor ? [singleColor, singleColor, singleColor, singleColor] : [color1, color2, color3, color4];
}