"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _cssKeyframer = require("css-keyframer");

var _cssKeyframer2 = _interopRequireDefault(_cssKeyframer);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var keyframer = new _cssKeyframer2.default();
var mountedInstanceCount = 0;

var MDSpinner = function (_Component) {
  _inherits(MDSpinner, _Component);

  function MDSpinner() {
    _classCallCheck(this, MDSpinner);

    return _possibleConstructorReturn(this, (MDSpinner.__proto__ || Object.getPrototypeOf(MDSpinner)).apply(this, arguments));
  }

  _createClass(MDSpinner, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (mountedInstanceCount === 0) {
        Object.keys(_styles.keyframes).forEach(function (key) {
          return keyframer.register(key, _styles.keyframes[key]);
        });
      }
      mountedInstanceCount++;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      mountedInstanceCount--;
      if (mountedInstanceCount === 0) {
        keyframer.unregisterAll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var className = props.className;
      var style = props.style;

      var _getStyles = (0, _styles.getStyles)(props);

      var rootStyle = _getStyles.rootStyle;
      var layerStyles = _getStyles.layerStyles;
      var layerAfterStyle = _getStyles.layerAfterStyle;
      var clipStyle = _getStyles.clipStyle;
      var clip1AfterStyles = _getStyles.clip1AfterStyles;
      var clip2AfterStyles = _getStyles.clip2AfterStyles;


      var layers = [];

      for (var i = 0; i < 4; i++) {
        layers.push(_react2.default.createElement(
          "span",
          { key: i, style: layerStyles[i] },
          _react2.default.createElement(
            "span",
            { style: clipStyle },
            _react2.default.createElement("span", { style: clip1AfterStyles[i] })
          ),
          _react2.default.createElement(
            "span",
            { style: clipStyle },
            _react2.default.createElement("span", { style: clip2AfterStyles[i] })
          ),
          _react2.default.createElement("span", { style: layerAfterStyle })
        ));
      }

      var mergedRootStyle = (0, _objectAssign2.default)({}, rootStyle, style || {});

      return _react2.default.createElement(
        "span",
        { className: className, style: mergedRootStyle },
        layers
      );
    }
  }]);

  return MDSpinner;
}(_react.Component);

MDSpinner.propTypes = {
  className: _react.PropTypes.string,
  userAgent: _react.PropTypes.string,
  style: _react.PropTypes.object,
  singleColor: _react.PropTypes.string,
  size: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  duration: _react.PropTypes.number,
  color1: _react.PropTypes.string,
  color2: _react.PropTypes.string,
  color3: _react.PropTypes.string,
  color4: _react.PropTypes.string
};
MDSpinner.defaultProps = {
  size: 28,
  duration: 1333,
  color1: "rgb(66, 165, 245)",
  color2: "rgb(239, 83, 80)",
  color3: "rgb(253, 216, 53)",
  color4: "rgb(76, 175, 80)"
};
exports.default = MDSpinner;