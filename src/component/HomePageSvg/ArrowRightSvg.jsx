import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ArrowRightSvg({
  width = 15,
  height = 15,
  color = "#0167B8",
  ...props
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0)">
        <Path
          d="M6.5 0A6.507 6.507 0 000 6.5C0 10.084 2.916 13 6.5 13S13 10.084 13 6.5 10.084 0 6.5 0zm0 12.188A5.694 5.694 0 01.812 6.5 5.694 5.694 0 016.5.812 5.694 5.694 0 0112.188 6.5 5.694 5.694 0 016.5 12.188zm2.725-5.975a.406.406 0 010 .574L7.193 8.818a.405.405 0 01-.574 0 .406.406 0 010-.574l1.338-1.338H4.063a.406.406 0 110-.812h3.894L6.619 4.756a.406.406 0 11.574-.574l2.032 2.03z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path fill="#fff" d="M0 0H13V13H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowRightSvg;
