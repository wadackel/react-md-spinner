"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyframes = undefined;

var _keyframes;

exports.getStyles = getStyles;

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _inlineStylePrefixer = require("inline-style-prefixer");

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KEYFRAME_PREFIX = "__react-md-spinner-animation__";

var Keyframe = {
  ROOT_ROTATE: "root-rotate",
  FILL_UNFILL_ROTATE: "fill-unfill-rotate",
  LAYER_1_FADE_IN_OUT: "layer-1-fade-in-out",
  LAYER_2_FADE_IN_OUT: "layer-2-fade-in-out",
  LAYER_3_FADE_IN_OUT: "layer-3-fade-in-out",
  LAYER_4_FADE_IN_OUT: "layer-4-fade-in-out",
  LEFT_SPIN: "left-spin",
  RIGHT_SPIN: "right-spin"
};

Object.keys(Keyframe).forEach(function (key) {
  Keyframe[key] = KEYFRAME_PREFIX + Keyframe[key];
});

var keyframes = exports.keyframes = (_keyframes = {}, _defineProperty(_keyframes, Keyframe.ROOT_ROTATE, {
  to: { transform: "rotate(360deg)" }
}), _defineProperty(_keyframes, Keyframe.FILL_UNFILL_ROTATE, {
  "12.5%": { transform: "rotate(135deg)" },
  "25%": { transform: "rotate(270deg)" },
  "37.5%": { transform: "rotate(405deg)" },
  "50%": { transform: "rotate(540deg)" },
  "62.5%": { transform: "rotate(675deg)" },
  "75%": { transform: "rotate(810deg)" },
  "87.5%": { transform: "rotate(945deg)" },
  to: { transform: "rotate(1080deg)" }
}), _defineProperty(_keyframes, Keyframe.LAYER_1_FADE_IN_OUT, {
  "0%": { opacity: 1 },
  "25%": { opacity: 1 },
  "26%": { opacity: 0 },
  "89%": { opacity: 0 },
  "90%": { opacity: 1 },
  to: { opacity: 1 }
}), _defineProperty(_keyframes, Keyframe.LAYER_2_FADE_IN_OUT, {
  "0%": { opacity: 0 },
  "15%": { opacity: 0 },
  "25%": { opacity: 1 },
  "50%": { opacity: 1 },
  "51%": { opacity: 0 },
  to: { opacity: 0 }
}), _defineProperty(_keyframes, Keyframe.LAYER_3_FADE_IN_OUT, {
  "0%": { opacity: 0 },
  "40%": { opacity: 0 },
  "50%": { opacity: 1 },
  "75%": { opacity: 1 },
  "76%": { opacity: 0 },
  to: { opacity: 0 }
}), _defineProperty(_keyframes, Keyframe.LAYER_4_FADE_IN_OUT, {
  "0%": { opacity: 0 },
  "65%": { opacity: 0 },
  "75%": { opacity: 1 },
  "90%": { opacity: 1 },
  to: { opacity: 0 }
}), _defineProperty(_keyframes, Keyframe.LEFT_SPIN, {
  from: { transform: "rotate(130deg)" },
  "50%": { transform: "rotate(-5deg)" },
  to: { transform: "rotate(130deg)" }
}), _defineProperty(_keyframes, Keyframe.RIGHT_SPIN, {
  from: { transform: "rotate(-130deg)" },
  "50%": { transform: "rotate(5deg)" },
  to: { transform: "rotate(-130deg)" }
}), _keyframes);

function getColors(props) {
  var singleColor = props.singleColor;
  var color1 = props.color1;
  var color2 = props.color2;
  var color3 = props.color3;
  var color4 = props.color4;


  return singleColor ? [singleColor, singleColor, singleColor, singleColor] : [color1, color2, color3, color4];
}

function getStyles(props) {
  var duration = props.duration;
  var userAgent = props.userAgent;

  var size = parseInt(props.size, 10);
  var colors = getColors(props);
  var borderWidth = Math.max(1, Math.round(parseInt(size, 10) * 0.107142));
  var arcSize = 270;
  var arcStartRotate = 216;
  var rootDuration = 360 * duration / (arcStartRotate + (360 - arcSize));
  var prefixer = new _inlineStylePrefixer2.default({ userAgent: userAgent });

  var rootStyle = prefixer.prefix({
    display: "inline-block",
    position: "relative",
    width: size,
    height: size,
    verticalAlign: "middle",
    animation: Keyframe.ROOT_ROTATE + " " + rootDuration + "ms linear infinite"
  });

  var layerStyle = prefixer.prefix({
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    whiteSpace: "nowrap",
    animationName: Keyframe.FILL_UNFILL_ROTATE,
    animationDuration: duration * colors.length + "ms",
    animationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    animationIterationCount: "infinite",
    opacity: 1
  });

  var layerStyles = colors.map(function (color, i) {
    return (0, _objectAssign2.default)({}, layerStyle, {
      borderColor: color,
      animationName: Keyframe.FILL_UNFILL_ROTATE + ", " + Keyframe["LAYER_" + (i + 1) + "_FADE_IN_OUT"]
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
    animationName: Keyframe.LEFT_SPIN
  }));

  var clip1AfterStyles = colors.map(function (color) {
    return (0, _objectAssign2.default)({}, clip1AfterStyle, {
      borderColor: color + " transparent transparent " + color
    });
  });

  var clip2AfterStyle = prefixer.prefix((0, _objectAssign2.default)({}, clipAfterStyle, {
    left: "-100%",
    transform: "rotate(-129deg)",
    animationName: Keyframe.RIGHT_SPIN
  }));

  var clip2AfterStyles = colors.map(function (color) {
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