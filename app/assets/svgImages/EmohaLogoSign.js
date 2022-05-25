import * as React from 'react';

const SvgComponent = props => (
  <svg
    width={120}
    height={240}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M119.989 53.97c-14.843-14.844-14.843-39.127 0-53.97 14.839 14.843 14.839 39.13 0 53.97zm.004 132.026c14.843 14.843 14.843 39.13 0 53.969-14.848-14.839-14.848-39.126 0-53.969zm-65.988-66.008c-14.879 14.883-39.162 14.883-54.005 0 14.843-14.843 39.126-14.843 54.005 0zm27.038-51.063a29.007 29.007 0 0 1-8.513-20.556 29.118 29.118 0 0 1 8.513-20.596l2.495-2.496L99.581 41.32c7.879 7.883 12.24 18.494 12.24 29.622a41.897 41.897 0 0 1-12.08 29.466l-.12.121-.156.156a41.878 41.878 0 0 1-29.466 12.079c-11.128 0-21.743-4.356-29.626-12.199L24.334 84.486l2.495-2.495a29.017 29.017 0 0 1 20.556-8.513 29.048 29.048 0 0 1 20.596 8.513l13.544 13.543a9.188 9.188 0 0 0 6.535 2.696c2.455 0 4.794-.95 6.535-2.696A9.201 9.201 0 0 0 97.287 89c0-2.459-.951-4.79-2.692-6.535l-13.552-13.54zm.004 102.204 13.548-13.544a9.193 9.193 0 0 0 2.692-6.535c0-2.455-.951-4.79-2.692-6.535a9.188 9.188 0 0 0-6.535-2.695c-2.455 0-4.79.95-6.535 2.695L67.98 158.059c-5.464 5.464-12.833 8.513-20.596 8.513a29.024 29.024 0 0 1-20.556-8.513l-2.495-2.495 16.039-16.079c7.883-7.843 18.498-12.2 29.626-12.2a41.882 41.882 0 0 1 29.466 12.079l.156.157.12.12a41.9 41.9 0 0 1 12.08 29.466c0 11.128-4.357 21.743-12.24 29.622l-16.04 16.043-2.496-2.495a29.111 29.111 0 0 1-8.513-20.596 29.015 29.015 0 0 1 8.517-20.552z"
      opacity={0.1}
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#DC3941"
    />
  </svg>
);

export default SvgComponent;