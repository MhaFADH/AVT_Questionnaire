import clsx from "clsx";
import React from "react";

const ColContainer = ({ className, ...otherProps }) => {
  return (
    <div className={clsx("flex flex-col w-full items-center", className)}>
      {otherProps.children}
    </div>
  );
};

export default ColContainer;
