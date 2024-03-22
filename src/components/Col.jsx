import clsx from "clsx";
import React from "react";

const Col = ({ className, ...otherProps }) => {
  return (
    <div className={clsx("w-3/5  space-y-3", className)}>
      {otherProps.children}
    </div>
  );
};

export default Col;
