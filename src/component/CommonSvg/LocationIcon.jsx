import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LocationIcon({
  width = 16,
  height = 16,
  color = "#716E90", // outer shape
  innerColor = "#fff", // inner circle
  ...props
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M14 6.664c0 3.415-3.213 6.473-4.937 7.868a1.675 1.675 0 01-2.126 0C5.213 13.137 2 10.079 2 6.664a6 6 0 1112 0z"
        fill={color}
      />
      <Path d="M8 8.664a2 2 0 100-4 2 2 0 000 4z" fill={innerColor} />
    </Svg>
  );
}

export default LocationIcon;
