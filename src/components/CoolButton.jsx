import React from "react";

const CoolButton = () => {
  return (
    <button className="relative mx-auto p-3 transition-all duration-200 border-none bg-transparent group focus:outline-none cta group-hover:before:bg-blue-300 group-hover:svg:translate-x-0 active:scale-95">
      <span className="relative font-bold text-lg text-blue-700">Hover me</span>
      <svg
        className="relative ml-2 fill-none stroke-current stroke-linecap-round stroke-linejoin-round stroke-2 transform -translate-x-1/4 transition-all duration-300 group-hover:translate-x-0"
        viewBox="0 0 13 10"
        height="10px"
        width="15px"
      >
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
};

export default CoolButton;
