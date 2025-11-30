import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function CrossSvg({ size = 15, color = "#0167B8", ...props }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0)">
        <Path
          d="M8.874 7.516l5.84-5.841A.97.97 0 1013.342.3L7.5 6.14 1.66.301A.97.97 0 10.284 1.675l5.84 5.84-5.84 5.842A.97.97 0 101.66 14.73L7.5 8.89l5.842 5.84a.97.97 0 001.374 0 .97.97 0 000-1.373l-5.84-5.841z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path d="M0 0H15V15H0z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CrossSvg;
