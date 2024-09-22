import React from 'react';

const LoveIcon = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_2078_1859)">
        <rect width="36" height="36" rx="18" fill="black" fill-opacity="0.05" />
        <mask
          id="mask0_2078_1859"
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="20"
          height="20"
        >
          <rect x="8" y="8" width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2078_1859)">
          <path
            d="M21.426 10.5C24.3612 10.5 26.3334 13.2938 26.3334 15.9C26.3334 21.1781 18.1482 25.5 18.0001 25.5C17.8519 25.5 9.66675 21.1781 9.66675 15.9C9.66675 13.2938 11.639 10.5 14.5742 10.5C16.2593 10.5 17.3612 11.3531 18.0001 12.1031C18.639 11.3531 19.7408 10.5 21.426 10.5Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.426 10.5C24.3612 10.5 26.3334 13.2938 26.3334 15.9C26.3334 21.1781 18.1482 25.5 18.0001 25.5C17.8519 25.5 9.66675 21.1781 9.66675 15.9C9.66675 13.2938 11.639 10.5 14.5742 10.5C16.2593 10.5 17.3612 11.3531 18.0001 12.1031C18.639 11.3531 19.7408 10.5 21.426 10.5Z"
            stroke="black"
            stroke-opacity="0.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_2078_1859"
          x="-2"
          y="-2"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2078_1859"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2078_1859"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LoveIcon;
