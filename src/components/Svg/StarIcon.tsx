import React from "react";

export const StarIcon: React.FC = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 15" {...props}>
      <g clipPath="url(#clip0)">
        <path
          fill="#F4C553"
          fillRule="evenodd"
          d="M7.998 12.29l4.457 2.647c.327.195.733-.093.646-.458l-1.18-4.988 3.93-3.351a.425.425 0 00-.25-.747l-5.18-.432L8.393.26a.432.432 0 00-.793 0l-2.026 4.7-5.18.432a.423.423 0 00-.242.747l3.93 3.35-1.18 4.989c-.086.365.319.653.646.458l4.449-2.647z"
          clipRule="evenodd"
        />
      </g>
      <g clipPath="url(#clip1)">
        <path
          fill="#F4C553"
          fillRule="evenodd"
          d="M7.998 12.29l4.457 2.647c.327.195.733-.093.646-.458l-1.18-4.988 3.93-3.351a.425.425 0 00-.25-.747l-5.18-.432L8.393.26a.432.432 0 00-.793 0l-2.026 4.7-5.18.432a.423.423 0 00-.242.747l3.93 3.35-1.18 4.989c-.086.365.319.653.646.458l4.449-2.647z"
          clipRule="evenodd"
        />
      </g>

      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H8V15H0z" />
        </clipPath>
        <clipPath id="clip1">
          <path fill="#fff" d="M0 0H8V15H0z" transform="translate(8)" />
        </clipPath>
      </defs>
    </svg>
  );
};
