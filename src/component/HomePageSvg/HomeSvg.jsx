import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeSvg({ width = 16, height = 18, color = "#0167B8", ...props }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      {...props}
    >
      <Path
        d="M0 15.5v-9c0-.317.071-.617.213-.9.142-.283.338-.517.587-.7l6-4.5C7.15.133 7.55 0 8 0c.45 0 .85.133 1.2.4l6 4.5c.25.183.446.417.588.7.142.283.213.583.212.9v9c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0114 17.5h-3a.965.965 0 01-.712-.288A.973.973 0 0110 16.5v-5a.965.965 0 00-.288-.712A.973.973 0 009 10.5H7a.965.965 0 00-.712.288A.972.972 0 006 11.5v5a.968.968 0 01-.288.713A.964.964 0 015 17.5H2c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 010 15.5z"
        fill={color}
      />
    </Svg>
  );
}

export default HomeSvg;
