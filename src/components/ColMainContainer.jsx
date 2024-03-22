import clsx from "clsx";

const ColMainContainer = ({ className, ...otherProps }) => {
  return <div className={clsx("flex", className)}>{otherProps.children}</div>;
};

export default ColMainContainer;
