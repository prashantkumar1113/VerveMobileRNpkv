import React from "react";
import { Svg, Path } from "react-native-svg";

export function Back(props) {
  const { color } = props;
  return (
    <Svg width={36} height={36} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.5 6.5L5.85355 12.1464C5.65829 12.3417 5.65829 12.6583 5.85355 12.8536L11.5 18.5"
        stroke={color ? color : "#46acc2"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
