import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EyeIconSvg({ width = 15, height = 10, color = "#fff", ...props }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 10"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8 5.254a7.32 7.32 0 01-6.39 3.758 7.32 7.32 0 01-6.39-3.758c-.1-.18-.1-.37 0-.55A7.32 7.32 0 017.41.943a7.32 7.32 0 016.39 3.76c.1.18.1.37 0 .55zm.824-1.01A8.263 8.263 0 007.411 0 8.264 8.264 0 00.195 4.244a1.478 1.478 0 000 1.469 8.264 8.264 0 007.216 4.244 8.264 8.264 0 007.213-4.244c.26-.467.26-1.002 0-1.47zM7.411 6.916a1.94 1.94 0 001.937-1.938A1.94 1.94 0 007.411 3.04c-1.07 0-1.94.87-1.94 1.938a1.94 1.94 0 001.94 1.938zm0-4.82a2.886 2.886 0 00-2.884 2.882A2.886 2.886 0 007.41 7.861a2.885 2.885 0 002.882-2.883A2.886 2.886 0 007.41 2.096z"
        fill={color}
      />
    </Svg>
  );
}

export default EyeIconSvg;
