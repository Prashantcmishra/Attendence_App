import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileSvg = ({
  width = 14,
  height = 20,
  strokeColor = "#000",
  strokeWidth = 2,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 20"
      fill="none"
      {...props}
    >
      <Path
        d="M1 19v-2a4 4 0 014-4h4a4 4 0 014 4v2M3 5a4 4 0 108 0 4 4 0 00-8 0z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ProfileSvg;
