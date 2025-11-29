import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const BackSvg = ({ width = 16, height = 16, fillColor = "#FFF", ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0)">
        <Path
          d="M3.44 8c0-.287.11-.574.328-.792l6.88-6.88a1.12 1.12 0 011.585 1.585L6.144 8l6.087 6.087a1.12 1.12 0 11-1.584 1.585l-6.88-6.88A1.117 1.117 0 013.44 8z"
          fill={fillColor}
        />
      </G>

      <Defs>
        <ClipPath id="clip0">
          <Path fill="#fff" transform="rotate(90 8 8)" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default BackSvg;
