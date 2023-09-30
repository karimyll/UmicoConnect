/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Vector = ({ color = "black", className }) => {
  return (
    <svg
      className={`vector ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.5 0L0.5 5.33618V18.6766L12.5 24L24.5 18.6766V5.33618L12.5 0ZM3.48558 5.84928L12.5 1.84714L15.976 3.38642L7.01923 7.41422L3.48558 5.84928ZM12.5 9.85142L9.06731 8.33779L18.0385 4.30999L21.5144 5.84928L12.5 9.85142ZM22.6538 7.18332V17.6505L13.4231 21.7552V11.2881L22.6538 7.18332ZM11.5769 21.7552L2.34615 17.6505V7.18332L11.5769 11.2881V21.7552Z"
        fill={color}
      />
    </svg>
  );
};

Vector.propTypes = {
  color: PropTypes.string,
};
