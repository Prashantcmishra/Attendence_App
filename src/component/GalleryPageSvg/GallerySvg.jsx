import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GallerySvg = ({
  width = 21,
  height = 19,
  color = "#000",
  focused = false,
  size = 24,
  ...props
}) => {
  // Use size prop if provided
  const svgWidth = size ? size : width;
  const svgHeight = size ? size * 0.9 : height;

  return (
    <Svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 21 19"
      fill="none"
      {...props}
    >
      {focused ? (
        // Filled version (Active state)
        <>
          <Path
            d="M14.25.75h-8.5a5 5 0 00-5 5v7a5 5 0 005 5h8.5a5 5 0 005-5v-7a5 5 0 00-5-5z"
            fill={color}
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M1 14.252l2.75-3.2a2.2 2.2 0 012.77-.27 2.2 2.2 0 002.77-.27l2.33-2.33a4 4 0 015.16-.43l2.49 1.93M6 7.422a1.66 1.66 0 100-3.32 1.66 1.66 0 000 3.32z"
            stroke="#FFFFFF"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        // Outline version (Inactive state)
        <>
          <Path
            d="M14.25.75h-8.5a5 5 0 00-5 5v7a5 5 0 005 5h8.5a5 5 0 005-5v-7a5 5 0 00-5-5z"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <Path
            d="M1 14.252l2.75-3.2a2.2 2.2 0 012.77-.27 2.2 2.2 0 002.77-.27l2.33-2.33a4 4 0 015.16-.43l2.49 1.93M6 7.422a1.66 1.66 0 100-3.32 1.66 1.66 0 000 3.32z"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      )}
    </Svg>
  );
};

export default GallerySvg;
