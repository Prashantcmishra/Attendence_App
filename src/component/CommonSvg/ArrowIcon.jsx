import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowIcon({
  width = 26,
  height = 26,
  color = "#000",
  strokeColor = "#fff",
  strokeWidth = 0.3,
  ...props
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      {...props}
    >
      <Path
        d="M21.988 13.014l-8.213 8.213-1.32-1.32 5.96-5.961H5.018v-1.867h13.398l-5.96-5.96 1.319-1.32 8.214 8.215z"
        fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default ArrowIcon;
