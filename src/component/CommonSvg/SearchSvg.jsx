import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchSvg = ({
  width = 20,
  height = 20,
  strokeColor = "#fff",
  strokeWidth = 2,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M17.778 17.774l-3.759-3.759m2.03-4.883a6.914 6.914 0 11-13.826 0 6.914 6.914 0 0113.827 0z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchSvg;
