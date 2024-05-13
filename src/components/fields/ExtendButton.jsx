import clsx from "clsx"

const ExtendButton = ({ label, className, ...otherProps }) => (
  <button
    {...otherProps}
    className={clsx(
      `flex items-center text-primary font-medium text-xl p-2 rounded-md hover:cursor-pointer hover:bg-hover`,
      `active:bg-active`,
      className
    )}>
    {otherProps.children}
    <span>{label}</span>
  </button>
)

export default ExtendButton
