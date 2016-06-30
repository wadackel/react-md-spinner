"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animationPrefix;
var prefix = "react-md-spinner__";

function animationPrefix() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

  return prefix + value;
}