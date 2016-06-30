"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStyles;

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _inlineStylePrefixer = require("inline-style-prefixer");

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _getColors = require("./get-colors");

var _getColors2 = _interopRequireDefault(_getColors);

var _animationPrefix = require("./animation-prefix");

var _animationPrefix2 = _interopRequireDefault(_animationPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefixer = new _inlineStylePrefixer2.default();

function getStyles(props) {
  var size = props.size;
  var duration = props.duration;

  var colors = (0, _getColors2.default)(props);
  var borderWidth = Math.round(size * 0.107142);
  var arcSize = 270;
  var arcStartRotate = 216;
  var rootDuration = 360 * duration / (arcStartRotate + (360 - arcSize));

  var rootStyle = prefixer.prefix({
    display: "inline-block",
    position: "relative",
    width: size,
    height: size,
    verticalAlign: "middle",
    animation: (0, _animationPrefix2.default)("root-rotate") + " " + rootDuration + "ms linear infinite"
  });

  var layerStyle = prefixer.prefix(_defineProperty({
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    whiteSpace: "nowrap",
    animationName: (0, _animationPrefix2.default)("fill-unfill-rotate"),
    animationDuration: duration * colors.length + "ms",
    animationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    animationIterationCount: "infinite"
  }, "opacity", 1));

  var layerStyles = colors.map(function (color, i) {
    return (0, _objectAssign2.default)({}, layerStyle, {
      borderColor: color,
      animationName: (0, _animationPrefix2.default)("fill-unfill-rotate") + ", " + (0, _animationPrefix2.default)("layer-" + (i + 1) + "-fade-in-out")
    });
  });

  var clipStyle = prefixer.prefix({
    display: "inline-block",
    position: "relative",
    flexGrow: 1,
    height: "100%",
    overflow: "hidden",
    borderColor: "inherit"
  });

  var layerClipAfterStyle = {
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    borderRadius: "50%"
  };

  var layerAfterStyle = prefixer.prefix((0, _objectAssign2.default)({}, layerClipAfterStyle, {
    left: "45%",
    width: "10%",
    borderWidth: borderWidth,
    borderColor: "inherit",
    borderTopStyle: "solid"
  }));

  var clipAfterStyle = (0, _objectAssign2.default)({}, layerClipAfterStyle, {
    bottom: 0,
    width: "200%",
    borderWidth: borderWidth,
    borderStyle: "solid",
    animationDuration: duration + "ms",
    animationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    animationIterationCount: "infinite"
  });

  var clip1AfterStyle = prefixer.prefix((0, _objectAssign2.default)({}, clipAfterStyle, {
    left: 0,
    transform: "rotate(129deg)",
    animationName: (0, _animationPrefix2.default)("left-spin")
  }));

  var clip1AfterStyles = colors.map(function (color, i) {
    return (0, _objectAssign2.default)({}, clip1AfterStyle, {
      borderColor: color + " transparent transparent " + color
    });
  });

  var clip2AfterStyle = prefixer.prefix((0, _objectAssign2.default)({}, clipAfterStyle, {
    left: "-100%",
    transform: "rotate(-129deg)",
    animationName: (0, _animationPrefix2.default)("right-spin")
  }));

  var clip2AfterStyles = colors.map(function (color, i) {
    return (0, _objectAssign2.default)({}, clip2AfterStyle, {
      borderColor: color + " " + color + " transparent transparent"
    });
  });

  return {
    rootStyle: rootStyle,
    layerStyles: layerStyles,
    layerAfterStyle: layerAfterStyle,
    clipStyle: clipStyle,
    clip1AfterStyles: clip1AfterStyles,
    clip2AfterStyles: clip2AfterStyles
  };
}