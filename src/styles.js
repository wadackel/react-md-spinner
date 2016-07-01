import assign from "object-assign";
import Prefixer from "inline-style-prefixer";


const prefixer = new Prefixer();

const KEYFRAME_PREFIX = "__react-md-spinner-animation__";

const Keyframe = {
  ROOT_ROTATE: "root-rotate",
  FILL_UNFILL_ROTATE: "fill-unfill-rotate",
  LAYER_1_FADE_IN_OUT: "layer-1-fade-in-out",
  LAYER_2_FADE_IN_OUT: "layer-2-fade-in-out",
  LAYER_3_FADE_IN_OUT: "layer-3-fade-in-out",
  LAYER_4_FADE_IN_OUT: "layer-4-fade-in-out",
  LEFT_SPIN: "left-spin",
  RIGHT_SPIN: "right-spin"
};

Object.keys(Keyframe).forEach(key => {
  Keyframe[key] = KEYFRAME_PREFIX + Keyframe[key];
});


export const keyframes = {
  [Keyframe.ROOT_ROTATE]: {
    to: { transform: "rotate(360deg)" }
  },
  [Keyframe.FILL_UNFILL_ROTATE]: {
    "12.5%": { transform: "rotate(135deg)" },
    "25%": { transform: "rotate(270deg)" },
    "37.5%": { transform: "rotate(405deg)" },
    "50%": { transform: "rotate(540deg)" },
    "62.5%": { transform: "rotate(675deg)" },
    "75%": { transform: "rotate(810deg)" },
    "87.5%": { transform: "rotate(945deg)" },
    to: { transform: "rotate(1080deg)" }
  },
  [Keyframe.LAYER_1_FADE_IN_OUT]: {
    "0%": { opacity: 1 },
    "25%": { opacity: 1 },
    "26%": { opacity: 0 },
    "89%": { opacity: 0 },
    "90%": { opacity: 1 },
    to: { opacity: 1 }
  },
  [Keyframe.LAYER_2_FADE_IN_OUT]: {
    "0%": { opacity: 0 },
    "15%": { opacity: 0 },
    "25%": { opacity: 1 },
    "50%": { opacity: 1 },
    "51%": { opacity: 0 },
    to: { opacity: 0 }
  },
  [Keyframe.LAYER_3_FADE_IN_OUT]: {
    "0%": { opacity: 0 },
    "40%": { opacity: 0 },
    "50%": { opacity: 1 },
    "75%": { opacity: 1 },
    "76%": { opacity: 0 },
    to: { opacity: 0 }
  },
  [Keyframe.LAYER_4_FADE_IN_OUT]: {
    "0%": { opacity: 0 },
    "65%": { opacity: 0 },
    "75%": { opacity: 1 },
    "90%": { opacity: 1 },
    to: { opacity: 0 }
  },
  [Keyframe.LEFT_SPIN]: {
    from: { transform: "rotate(130deg)" },
    "50%": { transform: "rotate(-5deg)" },
    to: { transform: "rotate(130deg)" }
  },
  [Keyframe.RIGHT_SPIN]: {
    from: { transform: "rotate(-130deg)" },
    "50%": { transform: "rotate(5deg)" },
    to: { transform: "rotate(-130deg)" }
  }
};


function getColors(props) {
  const {
    singleColor,
    color1,
    color2,
    color3,
    color4
  } = props;

  return singleColor
    ? [singleColor, singleColor, singleColor, singleColor]
    : [color1, color2, color3, color4];
}


export function getStyles(props) {
  const { size, duration } = props;
  const colors = getColors(props);
  const borderWidth = Math.max(1, Math.round(size * 0.107142));
  const arcSize = 270;
  const arcStartRotate = 216;
  const rootDuration = 360 * duration / (arcStartRotate + (360 - arcSize));

  const rootStyle = prefixer.prefix({
    display: "inline-block",
    position: "relative",
    width: size,
    height: size,
    verticalAlign: "middle",
    animation: `${Keyframe.ROOT_ROTATE} ${rootDuration}ms linear infinite`
  });

  const layerStyle = prefixer.prefix({
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    whiteSpace: "nowrap",
    animationName: Keyframe.FILL_UNFILL_ROTATE,
    animationDuration: `${duration * colors.length}ms`,
    animationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    animationIterationCount: "infinite",
    opacity: 1
  });

  const layerStyles = colors.map((color, i) =>
    assign({}, layerStyle, {
      borderColor: color,
      animationName: `${Keyframe.FILL_UNFILL_ROTATE}, ${Keyframe[`LAYER_${(i + 1)}_FADE_IN_OUT`]}`
    })
  );

  const clipStyle = prefixer.prefix({
    display: "inline-block",
    position: "relative",
    flexGrow: 1,
    height: "100%",
    overflow: "hidden",
    borderColor: "inherit"
  });

  const layerClipAfterStyle = {
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    borderRadius: "50%"
  };

  const layerAfterStyle = prefixer.prefix(assign({}, layerClipAfterStyle, {
    left: "45%",
    width: "10%",
    borderWidth,
    borderColor: "inherit",
    borderTopStyle: "solid"
  }));

  const clipAfterStyle = assign({}, layerClipAfterStyle, {
    bottom: 0,
    width: "200%",
    borderWidth,
    borderStyle: "solid",
    animationDuration: `${duration}ms`,
    animationTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    animationIterationCount: "infinite"
  });

  const clip1AfterStyle = prefixer.prefix(assign({}, clipAfterStyle, {
    left: 0,
    transform: "rotate(129deg)",
    animationName: Keyframe.LEFT_SPIN
  }));

  const clip1AfterStyles = colors.map(color =>
    assign({}, clip1AfterStyle, {
      borderColor: `${color} transparent transparent ${color}`
    })
  );

  const clip2AfterStyle = prefixer.prefix(assign({}, clipAfterStyle, {
    left: "-100%",
    transform: "rotate(-129deg)",
    animationName: Keyframe.RIGHT_SPIN
  }));

  const clip2AfterStyles = colors.map(color =>
    assign({}, clip2AfterStyle, {
      borderColor: `${color} ${color} transparent transparent`
    })
  );

  return {
    rootStyle,
    layerStyles,
    layerAfterStyle,
    clipStyle,
    clip1AfterStyles,
    clip2AfterStyles
  };
}
