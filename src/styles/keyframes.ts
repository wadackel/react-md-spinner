import Stylis from "stylis";

const KEYFRAME_PREFIX = "__react-md-spinner-animation__";

const stylis = new Stylis({
  global: false,
  cascade: true,
  keyframe: true,
  prefix: true,
  compress: false
});

export const Keyframe = {
  ROOT_ROTATE: `${KEYFRAME_PREFIX}root-rotate`,
  FILL_UNFILL_ROTATE: `${KEYFRAME_PREFIX}fill-unfill-rotate`,
  LAYER_1_FADE_IN_OUT: `${KEYFRAME_PREFIX}layer-1-fade-in-out`,
  LAYER_2_FADE_IN_OUT: `${KEYFRAME_PREFIX}layer-2-fade-in-out`,
  LAYER_3_FADE_IN_OUT: `${KEYFRAME_PREFIX}layer-3-fade-in-out`,
  LAYER_4_FADE_IN_OUT: `${KEYFRAME_PREFIX}layer-4-fade-in-out`,
  LEFT_SPIN: `${KEYFRAME_PREFIX}left-spin`,
  RIGHT_SPIN: `${KEYFRAME_PREFIX}right-spin`
};

export const keyframes = stylis(
  "",
  `
@keyframes ${Keyframe.ROOT_ROTATE} {
  to { transform: rotate(360deg); }
}

@keyframes ${Keyframe.FILL_UNFILL_ROTATE} {
  12.5% { transform: rotate(135deg) }
  25% { transform: rotate(270deg) }
  37.5% { transform: rotate(405deg) }
  50% { transform: rotate(540deg) }
  62.5% { transform: rotate(675deg) }
  75% { transform: rotate(810deg) }
  87.5% { transform: rotate(945deg) }
  100% { transform: rotate(1080deg) }
}

@keyframes ${Keyframe.LAYER_1_FADE_IN_OUT} {
  0% { opacity: 1 }
  25% { opacity: 1 }
  26% { opacity: 0 }
  89% { opacity: 0 }
  90% { opacity: 1 }
  100% { opacity: 1 }
}

@keyframes ${Keyframe.LAYER_2_FADE_IN_OUT} {
  0% { opacity: 0 }
  15% { opacity: 0 }
  25% { opacity: 1 }
  50% { opacity: 1 }
  51% { opacity: 0 }
  100% { opacity: 0 }
}

@keyframes ${Keyframe.LAYER_3_FADE_IN_OUT} {
  0% { opacity: 0 }
  40% { opacity: 0 }
  50% { opacity: 1 }
  75% { opacity: 1 }
  76% { opacity: 0 }
  100% { opacity: 0 }
}

@keyframes ${Keyframe.LAYER_4_FADE_IN_OUT} {
  0% { opacity: 0 }
  65% { opacity: 0 }
  75% { opacity: 1 }
  90% { opacity: 1 }
  100% { opacity: 0 }
}

@keyframes ${Keyframe.LEFT_SPIN} {
  0% { transform: rotate(130deg) }
  50% { transform: rotate(-5deg) }
  100% { transform: rotate(130deg) }
}

@keyframes ${Keyframe.RIGHT_SPIN} {
  0% { transform: rotate(-130deg) }
  50% { transform: rotate(5deg) }
  100% { transform: rotate(-130deg) }
}
`
);
