import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BookmarkIcon({
  width = 16,
  height = 16,
  strokeColor = "#CBD5E1",
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
        d="M9.667 7.1H6.334"
        stroke={strokeColor}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.213 1.333H4.786a2.58 2.58 0 00-2.573 2.574V13.3c0 1.2.86 1.707 1.913 1.127L7.38 12.62c.346-.193.906-.193 1.246 0l3.254 1.807c1.053.586 1.913.08 1.913-1.127V3.907a2.59 2.59 0 00-2.58-2.574z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BookmarkIcon;
