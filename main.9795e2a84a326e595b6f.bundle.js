(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    226: function(module, exports, __webpack_require__) {
      __webpack_require__(227),
        __webpack_require__(331),
        (module.exports = __webpack_require__(332));
    },
    332: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              98
            ),
            req = __webpack_require__(497);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
            function loadStories() {
              req.keys().forEach(req);
            },
            module
          );
        }.call(this, __webpack_require__(167)(module));
    },
    497: function(module, exports, __webpack_require__) {
      var map = { "./index.stories.tsx": 498 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 497);
    },
    498: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              98
            ),
            _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              224
            ),
            react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_2__
            ),
            _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9),
            withStorySource = __webpack_require__(499).withStorySource,
            __STORY__ =
              "import { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport React from 'react';\nimport MDSpinner from '../src';\n\nconst space = <span style={{ margin: '0 8px' }} />;\n\nstoriesOf('MDSpinner', module)\n  .add('with default', () => <MDSpinner />)\n  .add('with pass basic props', () => (\n    <MDSpinner\n      className=\"my-spinner\"\n      style={{ margin: 120 }}\n      aria-label=\"Loading...\"\n      onClick={action('onClick')}\n    />\n  ))\n  .add('with sizes', () => (\n    <>\n      <MDSpinner size={16} />\n      {space}\n      <MDSpinner size={30} />\n      {space}\n      <MDSpinner size={50} />\n      {space}\n      <MDSpinner size={70} />\n      {space}\n      <MDSpinner size={100} />\n    </>\n  ))\n  .add('with border sizes', () => (\n    <>\n      <MDSpinner size={70} borderSize={1} />\n      {space}\n      <MDSpinner size={70} borderSize={3} />\n      {space}\n      <MDSpinner size={70} borderSize={5} />\n      {space}\n      <MDSpinner size={70} borderSize={7} />\n      {space}\n      <MDSpinner size={70} borderSize={10} />\n    </>\n  ))\n  .add('with durations', () => (\n    <>\n      <MDSpinner duration={500} />\n      {space}\n      <MDSpinner duration={1333} />\n      {space}\n      <MDSpinner duration={2000} />\n    </>\n  ))\n  .add('with custom colors', () => (\n    <MDSpinner color1=\"#e91e63\" color2=\"#673ab7\" color3=\"#009688\" color4=\"#ff5722\" />\n  ))\n  .add('with single color', () => <MDSpinner singleColor=\"#03a9f4\" />);\n",
            __ADDS_MAP__ = {
              "mdspinner--with-single-color": {
                startLoc: { col: 7, line: 56 },
                endLoc: { col: 69, line: 56 }
              },
              "mdspinner--with-custom-colors": {
                startLoc: { col: 7, line: 53 },
                endLoc: { col: 3, line: 55 }
              },
              "mdspinner--with-durations": {
                startLoc: { col: 7, line: 44 },
                endLoc: { col: 3, line: 52 }
              },
              "mdspinner--with-border-sizes": {
                startLoc: { col: 7, line: 31 },
                endLoc: { col: 3, line: 43 }
              },
              "mdspinner--with-sizes": {
                startLoc: { col: 7, line: 18 },
                endLoc: { col: 3, line: 30 }
              },
              "mdspinner--with-pass-basic-props": {
                startLoc: { col: 7, line: 10 },
                endLoc: { col: 3, line: 17 }
              },
              "mdspinner--with-default": {
                startLoc: { col: 7, line: 9 },
                endLoc: { col: 42, line: 9 }
              }
            },
            space = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              "span",
              { style: { margin: "0 8px" } }
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "MDSpinner",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("with default", function() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _src__WEBPACK_IMPORTED_MODULE_3__.a,
                null
              );
            })
            .add("with pass basic props", function() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _src__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  className: "my-spinner",
                  style: { margin: 120 },
                  "aria-label": "Loading...",
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action
                  )("onClick")
                }
              );
            })
            .add("with sizes", function() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 16 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 30 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 50 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 70 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 100 }
                )
              );
            })
            .add("with border sizes", function() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 70, borderSize: 1 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 70, borderSize: 3 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 70, borderSize: 5 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 70, borderSize: 7 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { size: 70, borderSize: 10 }
                )
              );
            })
            .add("with durations", function() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { duration: 500 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { duration: 1333 }
                ),
                space,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_3__.a,
                  { duration: 2e3 }
                )
              );
            })
            .add("with custom colors", function() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _src__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  color1: "#e91e63",
                  color2: "#673ab7",
                  color3: "#009688",
                  color4: "#ff5722"
                }
              );
            })
            .add("with single color", function() {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _src__WEBPACK_IMPORTED_MODULE_3__.a,
                { singleColor: "#03a9f4" }
              );
            });
        }.call(this, __webpack_require__(167)(module));
    },
    9: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        stylis = __webpack_require__(225),
        KEYFRAME_PREFIX = "__react-md-spinner-animation__",
        keyframes_stylis = new (__webpack_require__.n(stylis)).a({
          global: !1,
          cascade: !0,
          keyframe: !0,
          prefix: !0,
          compress: !1
        }),
        Keyframe = {
          ROOT_ROTATE: "".concat(KEYFRAME_PREFIX, "root-rotate"),
          FILL_UNFILL_ROTATE: "".concat(KEYFRAME_PREFIX, "fill-unfill-rotate"),
          LAYER_1_FADE_IN_OUT: "".concat(
            KEYFRAME_PREFIX,
            "layer-1-fade-in-out"
          ),
          LAYER_2_FADE_IN_OUT: "".concat(
            KEYFRAME_PREFIX,
            "layer-2-fade-in-out"
          ),
          LAYER_3_FADE_IN_OUT: "".concat(
            KEYFRAME_PREFIX,
            "layer-3-fade-in-out"
          ),
          LAYER_4_FADE_IN_OUT: "".concat(
            KEYFRAME_PREFIX,
            "layer-4-fade-in-out"
          ),
          LEFT_SPIN: "".concat(KEYFRAME_PREFIX, "left-spin"),
          RIGHT_SPIN: "".concat(KEYFRAME_PREFIX, "right-spin")
        },
        keyframes = keyframes_stylis(
          "",
          "\n@keyframes "
            .concat(
              Keyframe.ROOT_ROTATE,
              " {\n  to { transform: rotate(360deg); }\n}\n\n@keyframes "
            )
            .concat(
              Keyframe.FILL_UNFILL_ROTATE,
              " {\n  12.5% { transform: rotate(135deg) }\n  25% { transform: rotate(270deg) }\n  37.5% { transform: rotate(405deg) }\n  50% { transform: rotate(540deg) }\n  62.5% { transform: rotate(675deg) }\n  75% { transform: rotate(810deg) }\n  87.5% { transform: rotate(945deg) }\n  100% { transform: rotate(1080deg) }\n}\n\n@keyframes "
            )
            .concat(
              Keyframe.LAYER_1_FADE_IN_OUT,
              " {\n  0% { opacity: 1 }\n  25% { opacity: 1 }\n  26% { opacity: 0 }\n  89% { opacity: 0 }\n  90% { opacity: 1 }\n  100% { opacity: 1 }\n}\n\n@keyframes "
            )
            .concat(
              Keyframe.LAYER_2_FADE_IN_OUT,
              " {\n  0% { opacity: 0 }\n  15% { opacity: 0 }\n  25% { opacity: 1 }\n  50% { opacity: 1 }\n  51% { opacity: 0 }\n  100% { opacity: 0 }\n}\n\n@keyframes "
            )
            .concat(
              Keyframe.LAYER_3_FADE_IN_OUT,
              " {\n  0% { opacity: 0 }\n  40% { opacity: 0 }\n  50% { opacity: 1 }\n  75% { opacity: 1 }\n  76% { opacity: 0 }\n  100% { opacity: 0 }\n}\n\n@keyframes "
            )
            .concat(
              Keyframe.LAYER_4_FADE_IN_OUT,
              " {\n  0% { opacity: 0 }\n  65% { opacity: 0 }\n  75% { opacity: 1 }\n  90% { opacity: 1 }\n  100% { opacity: 0 }\n}\n\n@keyframes "
            )
            .concat(
              Keyframe.LEFT_SPIN,
              " {\n  0% { transform: rotate(130deg) }\n  50% { transform: rotate(-5deg) }\n  100% { transform: rotate(130deg) }\n}\n\n@keyframes "
            )
            .concat(
              Keyframe.RIGHT_SPIN,
              " {\n  0% { transform: rotate(-130deg) }\n  50% { transform: rotate(5deg) }\n  100% { transform: rotate(-130deg) }\n}\n"
            )
        );
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              })
            )),
            ownKeys.forEach(function(key) {
              get_styles_defineProperty(target, key, source[key]);
            });
        }
        return target;
      }
      function get_styles_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      function _typeof(obj) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  "function" == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function MDSpinner_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              })
            )),
            ownKeys.forEach(function(key) {
              MDSpinner_defineProperty(target, key, source[key]);
            });
        }
        return target;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            "value" in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ("object" !== _typeof(call) && "function" != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function MDSpinner_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      var MDSpinner_MDSpinner = (function(_React$PureComponent) {
        function MDSpinner() {
          return (
            (function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError("Cannot call a class as a function");
            })(this, MDSpinner),
            _possibleConstructorReturn(
              this,
              _getPrototypeOf(MDSpinner).apply(this, arguments)
            )
          );
        }
        return (
          (function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(MDSpinner, react_default.a.PureComponent),
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Constructor
            );
          })(MDSpinner, [
            {
              key: "componentDidMount",
              value: function componentDidMount() {
                MDSpinner.mountedInstanceCount < 1 &&
                  (function injectStyles(name, rules) {
                    var el = document.createElement("style");
                    (el.type = "text/css"),
                      el.setAttribute("data-".concat(name), ""),
                      (el.innerHTML = rules),
                      document.head.appendChild(el);
                  })("react-md-spinner", keyframes),
                  MDSpinner.mountedInstanceCount++;
              }
            },
            {
              key: "componentWillUnmount",
              value: function componentWillUnmount() {
                (MDSpinner.mountedInstanceCount = Math.max(
                  0,
                  MDSpinner.mountedInstanceCount - 1
                )),
                  MDSpinner.mountedInstanceCount < 1 &&
                    (function uninjectStyles(name) {
                      var el = document.querySelector(
                        "[data-".concat(name, "]")
                      );
                      null != el &&
                        null != el.parentNode &&
                        el.parentNode.removeChild(el);
                    })("react-md-spinner");
              }
            },
            {
              key: "render",
              value: function render() {
                for (
                  var _this$props = this.props,
                    rest =
                      (_this$props.singleColor,
                      _this$props.size,
                      _this$props.borderSize,
                      _this$props.duration,
                      _this$props.color1,
                      _this$props.color2,
                      _this$props.color3,
                      _this$props.color4,
                      _objectWithoutProperties(_this$props, [
                        "singleColor",
                        "size",
                        "borderSize",
                        "duration",
                        "color1",
                        "color2",
                        "color3",
                        "color4"
                      ])),
                    _getStyles = (function getStyles(props) {
                      var size = props.size,
                        duration = props.duration,
                        borderWidth =
                          props.borderSize ||
                          Math.max(1, Math.round(0.107142 * size)),
                        colors = (function getColors(props) {
                          var singleColor = props.singleColor,
                            color1 = props.color1,
                            color2 = props.color2,
                            color3 = props.color3,
                            color4 = props.color4;
                          return singleColor
                            ? [
                                singleColor,
                                singleColor,
                                singleColor,
                                singleColor
                              ]
                            : [color1, color2, color3, color4];
                        })(props),
                        rootDuration = (360 * duration) / 306,
                        rootStyle = {
                          display: "inline-block",
                          position: "relative",
                          width: size,
                          height: size,
                          verticalAlign: "middle",
                          fontSize: "0",
                          animation: ""
                            .concat(Keyframe.ROOT_ROTATE, " ")
                            .concat(rootDuration, "ms linear infinite"),
                          WebkitAnimation: ""
                            .concat(Keyframe.ROOT_ROTATE, " ")
                            .concat(rootDuration, "ms linear infinite")
                        },
                        layerStyles = colors.map(function(color, i) {
                          return {
                            boxSizing: "border-box",
                            display: "block",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderColor: color,
                            whiteSpace: "nowrap",
                            opacity: 1,
                            animationName: ""
                              .concat(Keyframe.FILL_UNFILL_ROTATE, ", ")
                              .concat(
                                Keyframe["LAYER_".concat(i + 1, "_FADE_IN_OUT")]
                              ),
                            WebkitAnimationName: ""
                              .concat(Keyframe.FILL_UNFILL_ROTATE, ", ")
                              .concat(
                                Keyframe["LAYER_".concat(i + 1, "_FADE_IN_OUT")]
                              ),
                            animationDuration: "".concat(
                              duration * colors.length,
                              "ms"
                            ),
                            WebkitAnimationDuration: "".concat(
                              duration * colors.length,
                              "ms"
                            ),
                            animationTimingFunction:
                              "cubic-bezier(.4, 0, .2, 1)",
                            WebkitAnimationTimingFunction:
                              "cubic-bezier(.4, 0, .2, 1)",
                            animationIterationCount: "infinite",
                            WebkitAnimationIterationCount: "infinite"
                          };
                        }),
                        layerClipAfterStyle = {
                          display: "inline-block",
                          boxSizing: "border-box",
                          position: "absolute",
                          top: 0,
                          borderRadius: "50%"
                        },
                        layerAfterStyle = _objectSpread(
                          {},
                          layerClipAfterStyle,
                          {
                            left: "45%",
                            width: "10%",
                            borderWidth: borderWidth,
                            borderColor: "inherit",
                            borderTopStyle: "solid"
                          }
                        ),
                        clipAfterStyle = _objectSpread(
                          {},
                          layerClipAfterStyle,
                          {
                            bottom: 0,
                            width: "200%",
                            borderWidth: borderWidth,
                            borderStyle: "solid",
                            animationDuration: "".concat(duration, "ms"),
                            WebkitAnimationDuration: "".concat(duration, "ms"),
                            animationTimingFunction:
                              "cubic-bezier(.4, 0, .2, 1)",
                            WebkitAnimationTimingFunction:
                              "cubic-bezier(.4, 0, .2, 1)",
                            animationIterationCount: "infinite",
                            WebkitAnimationIterationCount: "infinite"
                          }
                        ),
                        clip1AfterStyle = _objectSpread({}, clipAfterStyle, {
                          left: 0,
                          transform: "rotate(129deg)",
                          WebkitTransform: "rotate(129deg)",
                          animationName: Keyframe.LEFT_SPIN,
                          WebkitAnimationName: Keyframe.LEFT_SPIN
                        }),
                        clip1AfterStyles = colors.map(function(color) {
                          return _objectSpread({}, clip1AfterStyle, {
                            borderColor: ""
                              .concat(color, " transparent transparent ")
                              .concat(color)
                          });
                        }),
                        clip2AfterStyle = _objectSpread({}, clipAfterStyle, {
                          left: "-100%",
                          transform: "rotate(-129deg)",
                          WebkitTransform: "rotate(-129deg)",
                          animationName: Keyframe.RIGHT_SPIN,
                          WebkitAnimationName: Keyframe.RIGHT_SPIN
                        });
                      return {
                        rootStyle: rootStyle,
                        layerStyles: layerStyles,
                        layerAfterStyle: layerAfterStyle,
                        clipStyle: {
                          display: "inline-block",
                          boxSizing: "border-box",
                          position: "relative",
                          width: "50%",
                          height: "100%",
                          overflow: "hidden",
                          borderColor: "inherit"
                        },
                        clip1AfterStyles: clip1AfterStyles,
                        clip2AfterStyles: colors.map(function(color) {
                          return _objectSpread({}, clip2AfterStyle, {
                            borderColor: ""
                              .concat(color, " ")
                              .concat(color, " transparent transparent")
                          });
                        })
                      };
                    })(this.props),
                    rootStyle = _getStyles.rootStyle,
                    layerStyles = _getStyles.layerStyles,
                    layerAfterStyle = _getStyles.layerAfterStyle,
                    clipStyle = _getStyles.clipStyle,
                    clip1AfterStyles = _getStyles.clip1AfterStyles,
                    clip2AfterStyles = _getStyles.clip2AfterStyles,
                    layers = [],
                    i = 0;
                  i < 4;
                  i++
                )
                  layers.push(
                    react_default.a.createElement(
                      "span",
                      { key: i, style: layerStyles[i] },
                      react_default.a.createElement(
                        "span",
                        { style: clipStyle },
                        react_default.a.createElement("span", {
                          style: clip1AfterStyles[i]
                        })
                      ),
                      react_default.a.createElement(
                        "span",
                        { style: clipStyle },
                        react_default.a.createElement("span", {
                          style: clip2AfterStyles[i]
                        })
                      ),
                      react_default.a.createElement("span", {
                        style: layerAfterStyle
                      })
                    )
                  );
                return react_default.a.createElement(
                  "span",
                  _extends({}, rest, {
                    style: MDSpinner_objectSpread(
                      {},
                      rootStyle,
                      null != rest.style ? rest.style : {}
                    )
                  }),
                  layers
                );
              }
            }
          ]),
          MDSpinner
        );
      })();
      MDSpinner_defineProperty(MDSpinner_MDSpinner, "defaultProps", {
        size: 28,
        duration: 1333,
        color1: "rgb(66, 165, 245)",
        color2: "rgb(239, 83, 80)",
        color3: "rgb(253, 216, 53)",
        color4: "rgb(76, 175, 80)"
      }),
        MDSpinner_defineProperty(
          MDSpinner_MDSpinner,
          "mountedInstanceCount",
          0
        );
      __webpack_exports__.a = MDSpinner_MDSpinner;
    }
  },
  [[226, 1, 2]]
]);
//# sourceMappingURL=main.9795e2a84a326e595b6f.bundle.js.map
