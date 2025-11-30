import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AlertSvg = ({
  width = 24,
  height = 24,
  color = "#000",
  focused = false,
  size = 24,
  ...props
}) => {
  // Use size prop if provided
  const svgWidth = size || width;
  const svgHeight = size || height;

  return (
    <Svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      {focused ? (
        // Filled version (Active state)
        <Path
          d="M15.5 18a3.5 3.5 0 11-7 0m10.731 0H4.771a1.768 1.768 0 01-1.25-3.02l.601-.603A3 3 0 005 12.256V9.5a7 7 0 0114 0v2.756a3 3 0 00.88 2.121l.602.603a1.77 1.77 0 01-1.25 3.02z"
          fill={color}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        // Outline version (Inactive state)
        <Path
          d="M15.5 18a3.5 3.5 0 11-7 0m10.731 0H4.771a1.768 1.768 0 01-1.25-3.02l.601-.603A3 3 0 005 12.256V9.5a7 7 0 0114 0v2.756a3 3 0 00.88 2.121l.602.603a1.77 1.77 0 01-1.25 3.02z"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </Svg>
  );
};

export default AlertSvg;
