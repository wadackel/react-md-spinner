import React, { Component, PropTypes } from "react";
import assign from "object-assign";
import CSSKeyframer from "css-keyframer";
import getColors from "./get-colors";
import { getStyles, keyframes } from "./styles";


const keyframer = new CSSKeyframer();
let mountedInstanceCount = 0;


export default class MDSpinner extends Component {
  static propTypes = {
    className: PropTypes.string,
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

  componentWillMount() {
    if (mountedInstanceCount === 0) {
      Object.keys(keyframes).forEach(key => keyframer.register(key, keyframes[key]));
    }
    mountedInstanceCount++;
  }

  componentWillUnmount() {
    if (mountedInstanceCount === 0) {
      keyframer.unregisterAll();
    }
    mountedInstanceCount--;
  }

  render() {
    const { props } = this;
    const { className, style } = props;
    const colors = getColors(props);

    const {
      rootStyle,
      layerStyles,
      layerAfterStyle,
      clipStyle,
      clip1AfterStyles,
      clip2AfterStyles
    } = getStyles(props);

    const layers = colors.map((color, i) =>
      <div key={i} style={layerStyles[i]}>
        <div style={clipStyle}>
          <div style={clip1AfterStyles[i]} />
        </div>
        <div style={clipStyle}>
          <div style={clip2AfterStyles[i]} />
        </div>
        <div style={layerAfterStyle} />
      </div>
    );

    const mergedRootStyle = assign({}, rootStyle, rootStyle || {});

    return (
      <div className={className} style={mergedRootStyle}>
        {layers}
      </div>
    );
  }
}
