import * as React from "react";
import Svg, { Path } from "react-native-svg";

const VideoSvg = ({
  width = 28,
  height = 18,
  fillColor = "#70A62A",
  strokeColor = "#fff",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 18"
      fill="none"
      {...props}
    >
      <Path
        d="M.75 13.967V3.533c0-.738.304-1.446.846-1.968A2.946 2.946 0 013.64.75h12.278c.766 0 1.5.293 2.042.815.542.522.847 1.23.847 1.968v10.434c0 .738-.305 1.446-.847 1.968a2.946 2.946 0 01-2.042.815H3.639a2.946 2.946 0 01-2.043-.815 2.732 2.732 0 01-.846-1.968zM25.548 1.781L19.77 6.738a.698.698 0 00-.242.52V9.73a.674.674 0 00.242.519l5.778 4.957a.747.747 0 00.776.114.715.715 0 00.31-.256.677.677 0 00.116-.378V2.3a.678.678 0 00-.116-.378.715.715 0 00-.31-.256.748.748 0 00-.776.114z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default VideoSvg;
