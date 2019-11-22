import React from "react";

export const FeedIcon: React.FC = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" clipPath="url(#clip666)">
        <path d="M19.2 12H4.8a1.8 1.8 0 000 3.6h14.4a1.8 1.8 0 000-3.6zM19.2 17.4H4.8a1.8 1.8 0 000 3.6h14.4a1.8 1.8 0 000-3.6z" />
        <rect width="18" height="7.2" x="3" y="3" rx="2" />
      </g>
      <defs>
        <clipPath id="clip666">
          <path fill="#fff" d="M0 0H18V18H0z" transform="translate(3 3)" />
        </clipPath>
      </defs>
    </svg>
  );
};
