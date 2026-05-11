import React from "react";

const SectionSubHeading = ({
  children,
  className = "",
  style,
}) => {
  return (
    <div
      className={`font-semibold leading-relaxed ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default SectionSubHeading;