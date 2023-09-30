/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LaHackerrank1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`la-hackerrank-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.4984 2.25C11.1686 2.25 4.65114 5.988 3.99339 7.128C3.33489 8.268 3.33489 15.7372 3.99339 16.8735C4.65489 18.0127 11.1724 21.75 12.4984 21.75C13.8214 21.75 20.3389 18.015 21.0019 16.8765C21.6671 15.735 21.6671 8.2605 21.0019 7.1235V7.122C20.3336 5.985 13.8169 2.25 12.4984 2.25ZM12.4969 3.759C13.7696 4.02375 18.8134 6.91275 19.6969 7.8825C20.1019 9.1125 20.1011 14.883 19.6969 16.116C18.8194 17.0843 13.7719 19.977 12.4969 20.241C11.2234 19.9785 6.17889 17.0872 5.29989 16.1175C4.89864 14.8815 4.89864 9.117 5.29989 7.8825C6.17739 6.91275 11.2226 4.0215 12.4969 3.759ZM10.2499 6.75L8.74989 8.25H9.49989V15.75H10.9999V12.75H13.9999V15.75H13.2499L14.7499 17.25L16.2499 15.75H15.4999V9H13.9999V11.25H10.9999V8.25H11.7499L10.2499 6.75Z"
        fill={color}
      />
    </svg>
  );
};

LaHackerrank1.propTypes = {
  color: PropTypes.string,
};
