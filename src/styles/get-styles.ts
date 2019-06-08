import { CSSProperties } from "react";
import { Props } from "../MDSpinner";
import { Keyframe } from "./keyframes";

type StyleProps = Pick<
  Props,
  | "size"
  | "duration"
  | "borderSize"
  | "singleColor"
  | "color1"
  | "color2"
  | "color3"
  | "color4"
>;

const getColors = (props: StyleProps) => {
  const { singleColor, color1, color2, color3, color4 } = props;

  return singleColor
    ? [singleColor, singleColor, singleColor, singleColor]
    : [color1, color2, color3, color4];
};

export const getStyles = (props: StyleProps) => {
  const size = props.size as number;
  const duration = props.duration as number;
  const borderSize = props.borderSize as number;

  const borderWidth = borderSize || Math.max(1, Math.round(size * 0.107142));
  const colors = getColors(props);
  const arcSize = 270;
  const arcStartRotate = 216;
  const rootDuration = (360 * duration) / (arcStartRotate + (360 - arcSize));

  const rootStyle: CSSProperties = {
    display: "inline-block",
    position: "relative",
    width: size,
    height: size,
    verticalAlign: "middle",
    fontSize: "0",
    animation: `${Keyframe.ROOT_ROTATE} ${rootDuration}ms linear infinite`,
    WebkitAnimation: `${Keyframe.ROOT_ROTATE} ${rootDuration}ms linear infinite`
  };

  const layerStyles: CSSProperties[] = colors.map((color, i) => ({
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderColor: color,
    whiteSpace: "nowrap",
    opacity: 1,
    animationName: `${Keyframe.FILL_UNFILL_ROTATE}, ${
      Keyframe[`LAYER_${i + 1}_FADE_IN_OUT` as keyof typeof Keyframe]
    }`,
    WebkitAnimationName: `${Keyframe.FILL_UNFILL_ROTATE}, ${
      Keyframe[`LAYER_${i + 1}_FADE_IN_OUT` as keyof typeof Keyframe]
    }`,
    animationDuration: `${duration * colors.length}ms`,
    WebkitAnimationDuration: `${duration * colors.length}ms`,
    animationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    WebkitAnimationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    animationIterationCount: "infinite",
    WebkitAnimationIterationCount: "infinite"
  }));

  const clipStyle: CSSProperties = {
    display: "inline-block",
    boxSizing: "border-box",
    position: "relative",
    width: "50%",
    height: "100%",
    overflow: "hidden",
    borderColor: "inherit"
  };

  const layerClipAfterStyle: CSSProperties = {
    display: "inline-block",
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    borderRadius: "50%"
  };

  const layerAfterStyle: CSSProperties = {
    ...layerClipAfterStyle,
    left: "45%",
    width: "10%",
    borderWidth,
    borderColor: "inherit",
    borderTopStyle: "solid"
  };

  const clipAfterStyle: CSSProperties = {
    ...layerClipAfterStyle,
    bottom: 0,
    width: "200%",
    borderWidth,
    borderStyle: "solid",
    animationDuration: `${duration}ms`,
    WebkitAnimationDuration: `${duration}ms`,
    animationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    WebkitAnimationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    animationIterationCount: "infinite",
    WebkitAnimationIterationCount: "infinite"
  };

  const clip1AfterStyle: CSSProperties = {
    ...clipAfterStyle,
    left: 0,
    transform: "rotate(129deg)",
    WebkitTransform: "rotate(129deg)",
    animationName: Keyframe.LEFT_SPIN,
    WebkitAnimationName: Keyframe.LEFT_SPIN
  };

  const clip1AfterStyles: CSSProperties[] = colors.map(color => ({
    ...clip1AfterStyle,
    borderColor: `${color} transparent transparent ${color}`
  }));

  const clip2AfterStyle: CSSProperties = {
    ...clipAfterStyle,
    left: "-100%",
    transform: "rotate(-129deg)",
    WebkitTransform: "rotate(-129deg)",
    animationName: Keyframe.RIGHT_SPIN,
    WebkitAnimationName: Keyframe.RIGHT_SPIN
  };

  const clip2AfterStyles: CSSProperties[] = colors.map(color => ({
    ...clip2AfterStyle,
    borderColor: `${color} ${color} transparent transparent`
  }));

  return {
    rootStyle,
    layerStyles,
    layerAfterStyle,
    clipStyle,
    clip1AfterStyles,
    clip2AfterStyles
  };
};
