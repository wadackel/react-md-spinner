export default function getColors(props) {
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
