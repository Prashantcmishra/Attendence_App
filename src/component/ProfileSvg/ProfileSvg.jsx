import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const ProfileSvg = ({
  width = 14,
  height = 20,
  color = "#000",
  focused = false,
  size = 24,
  ...props
}) => {
  // Use size prop if provided, otherwise use width/height
  const svgWidth = size ? size * 0.7 : width;
  const svgHeight = size ? size : height;

  return (
    <Svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 14 20"
      fill="none"
      {...props}
    >
      {focused ? (
        // Filled version (Active state)
        <Path
          d="M1 19v-2a4 4 0 014-4h4a4 4 0 014 4v2M3 5a4 4 0 108 0 4 4 0 00-8 0z"
          fill={color}
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        // Outline version (Inactive state)
        <Path
          d="M1 19v-2a4 4 0 014-4h4a4 4 0 014 4v2M3 5a4 4 0 108 0 4 4 0 00-8 0z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </Svg>
  );
};

export default ProfileSvg;
