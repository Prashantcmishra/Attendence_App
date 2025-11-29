import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GallerySvg = ({
  width = 21,
  height = 19,
  strokeColor = "#000",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 21 19"
      fill="none"
      {...props}
    >
      <Path
        d="M14.25.75h-8.5a5 5 0 00-5 5v7a5 5 0 005 5h8.5a5 5 0 005-5v-7a5 5 0 00-5-5z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 14.252l2.75-3.2a2.2 2.2 0 012.77-.27 2.2 2.2 0 002.77-.27l2.33-2.33a4 4 0 015.16-.43l2.49 1.93M6 7.422a1.66 1.66 0 100-3.32 1.66 1.66 0 000 3.32z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GallerySvg;
