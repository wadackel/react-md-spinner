import React, { Component } from "react";
import PropTypes from "prop-types";
import exenv from "exenv";
import CSSKeyframer from "css-keyframer";
import { getStyles, keyframes } from "./styles";

const { canUseDOM } = exenv;


class MDSpinner extends Component {
  static propTypes = {
    className: PropTypes.string,
    userAgent: PropTypes.string,
    style: PropTypes.object,
    singleColor: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    duration: PropTypes.number,
    color1: PropTypes.string,
    color2: PropTypes.string,
    color3: PropTypes.string,
    color4: PropTypes.string
  };

  static defaultProps = {
    size: 28,
    duration: 1333,
    color1: "rgb(66, 165, 245)",
    color2: "rgb(239, 83, 80)",
    color3: "rgb(253, 216, 53)",
    color4: "rgb(76, 175, 80)"
  };

  static mountedInstanceCount = 0;

  constructor(props, context) {
    super(props, context);

    this.keyframer = new CSSKeyframer({
      userAgent: props.userAgent
    });
  }

  componentWillMount() {
    this.registerKeyframesIfNeeded();

    MDSpinner.mountedInstanceCount++;
  }

  componentWillUnmount() {
    MDSpinner.mountedInstanceCount--;

    this.unregisterKeyframesIfNeeded();
    this.keyframer = null;
  }

  registerKeyframesIfNeeded() {
    if (MDSpinner.mountedInstanceCount > 0) return;
    if (!this.keyframer) return;

    Object.keys(keyframes).forEach(key =>
      this.keyframer.register(key, keyframes[key])
    );
  }

  unregisterKeyframesIfNeeded() {
    if (!canUseDOM) return;
    if (MDSpinner.mountedInstanceCount > 0) return;
    if (!this.keyframer) return;

    Object.keys(keyframes).forEach(key => {
      const $style = document.querySelector(`style[data-keyframes="${key}"]`);
      if ($style) {
        $style.parentNode.removeChild($style);
      }
    });
  }

  render() {
    const { props } = this;
    const { className, style } = props;

    const {
      rootStyle,
      layerStyles,
      layerAfterStyle,
      clipStyle,
      clip1AfterStyles,
      clip2AfterStyles
    } = getStyles(props);

    const layers = [];

    for (let i = 0; i < 4; i++) {
      layers.push(
        <span key={i} style={layerStyles[i]}>
          <span style={clipStyle}>
            <span style={clip1AfterStyles[i]} />
          </span>
          <span style={clipStyle}>
            <span style={clip2AfterStyles[i]} />
          </span>
          <span style={layerAfterStyle} />
        </span>
      );
    }

    return (
      <span
        className={className}
        style={{
          ...rootStyle,
          ...(style || {})
        }}
      >
        {layers}
      </span>
    );
  }
}


export default MDSpinner;
