import React from "react";
import { getStyles } from "./styles/get-styles";
import { keyframes } from "./styles/keyframes";
import { injectStyles, uninjectStyles } from "./utils/manipulation";
import { STYLE_DATA_NAME } from "./constants";

export type Props = React.ComponentProps<"span"> & {
  singleColor?: string;
  size?: number;
  borderSize?: number;
  duration?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
};

export class MDSpinner extends React.PureComponent<Props> {
  public static defaultProps = {
    size: 28,
    duration: 1333,
    color1: "rgb(66, 165, 245)",
    color2: "rgb(239, 83, 80)",
    color3: "rgb(253, 216, 53)",
    color4: "rgb(76, 175, 80)"
  };

  private static mountedInstanceCount = 0;

  public componentDidMount() {
    if (MDSpinner.mountedInstanceCount < 1) {
      injectStyles(STYLE_DATA_NAME, keyframes);
    }

    MDSpinner.mountedInstanceCount++;
  }

  public componentWillUnmount() {
    MDSpinner.mountedInstanceCount = Math.max(
      0,
      MDSpinner.mountedInstanceCount - 1
    );

    if (MDSpinner.mountedInstanceCount < 1) {
      uninjectStyles(STYLE_DATA_NAME);
    }
  }

  public render() {
    const {
      singleColor: _singleColor,
      size: _size,
      borderSize: _borderSize,
      duration: _duration,
      color1: _color1,
      color2: _color2,
      color3: _color3,
      color4: _color4,
      ...rest
    } = this.props;

    const {
      rootStyle,
      layerStyles,
      layerAfterStyle,
      clipStyle,
      clip1AfterStyles,
      clip2AfterStyles
    } = getStyles(this.props);

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
        {...rest}
        style={{
          ...rootStyle,
          ...(rest.style != null ? rest.style : {})
        }}
      >
        {layers}
      </span>
    );
  }
}
