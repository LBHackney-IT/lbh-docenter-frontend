import React from "react";

// Dynamic heading: will give an output of 'h1'-'h6' or a 'p' depending on input.
const HeadingN = ({ children, n }) => {
  const isHeadingRangeValid = n < 7;
  return React.createElement(
    isHeadingRangeValid ? `h${n}` : "p",
    isHeadingRangeValid ? null : { className: "paragraphHeading" },
    children
  );
};

export default HeadingN;
