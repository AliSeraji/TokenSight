import React from "react";

export default function SearchIcon({
  width = 10,
  height = 6,
  color = "#FFFFFF",
  ...rest
}: {
  width: number;
  height: number;
  color?: string;
  [x: string]: any;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
      {...rest}
    >
      <g id="Layer_21" data-name="Layer 21">
        <path
          stroke={color}
          d="M39,24.27a14.71,14.71,0,0,0-14.7-14.7,2,2,0,0,0,0,4A10.71,10.71,0,0,1,35,24.27a2,2,0,0,0,4,0Z"
        />
        <path
          stroke={color}
          d="M61.41,58.59,41.36,38.53a22.3,22.3,0,1,0-2.83,2.83L58.59,61.41a2,2,0,0,0,2.83-2.83ZM6,24.27A18.27,18.27,0,1,1,24.27,42.54,18.29,18.29,0,0,1,6,24.27Z"
        />
      </g>
    </svg>
  );
}