import React from "react";
import CSSKeyframer from "css-keyframer";
import { keyframes } from "./styles";


const keyframerFactory = (options = {}) => new CSSKeyframer(options);

const mapKeyframes = iteratee => (
  Object.keys(keyframes).map(key => (
    iteratee(keyframes[key], key)
  ))
);


export const getStylesheetString = userAgent => {
  const keyframer = keyframerFactory({ userAgent });

  return mapKeyframes((keyframe, key) =>
    keyframer.getKeyframesStylesheet(key, keyframe)
  ).join("");
};


export const getStylesheetComponent = userAgent => {
  const keyframer = keyframerFactory({ userAgent });

  return mapKeyframes((keyframe, key) =>
    <style
      key={key}
      type="text/css"
      data-keyframes={key}
      dangerouslySetInnerHTML={{
        __html: keyframer.getKeyframesString(key, keyframe)
      }}
    />
  );
};
