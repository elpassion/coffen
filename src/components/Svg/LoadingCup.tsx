import React from "react";

import { colorName } from "styles";

export const LoadingCup = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100"
      height="100"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id="a" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="10%" stopOpacity="0" />
          <stop offset="100%" stopColor={colorName.red} />
        </linearGradient>
        <mask id="b" width="100" height="100" x="0" y="0" maskUnits="userSpaceOnUse">
          <path fill="url(#a)" d="M22 8H78V62H22z" />
        </mask>
        <path
          id="c"
          fill="red"
          stroke={colorName.red}
          strokeLinecap="round"
          strokeWidth="6"
          d="M0-4c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9"
        />
      </defs>
      <g mask="url(#b)">
        <use x="29" y="18" xlinkHref="#c">
          <animate attributeName="y" begin="-0.5s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="4;-14" />
        </use>
        <use x="47" y="18" xlinkHref="#c">
          <animate attributeName="y" begin="-0.25s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="0;-18" />
        </use>
        <use x="64" y="18" xlinkHref="#c">
          <animate
            attributeName="y"
            begin="-0.3333333333333333s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="-4;-22"
          />
        </use>
      </g>
      <path
        fill={colorName.red}
        d="M81.2 52.5H76V49c0-1.6-1.3-3-3-3H20c-1.6 0-3 1.3-3 3v11.6C17 71.3 25.7 80 36.5 80h20.1c7.1 0 13.3-3.8 16.7-9.5h8.3c5.2 0 9.3-4.4 9-9.6-.4-4.8-4.6-8.4-9.4-8.4zm.3 15h-6.8c.8-2.2 1.3-4.5 1.3-7v-5h5.5c3.3 0 6 2.7 6 6s-2.7 6-6 6z"
      />
      <path fill={colorName.red} d="M78.8 88H19.2c-1.1 0-2-.9-2-2s.9-2 2-2h59.5c1.1 0 2 .9 2 2s-.8 2-1.9 2z" />
    </svg>
  );
};
