import clsx from "clsx"
import React from "react"
import { FaXmark } from "react-icons/fa6"

const FieldSelectionModal = ({
  isModalOpen,
  closeModal,
  className,
  ...otherProps
}) => (
  <div className={className} onClick={closeModal}>
    <div
      className={clsx(
        "bg-maintheme rounded-md transition-all select-none h-1/2 w-1/4 p-4 flex flex-col",
        isModalOpen ? "scale-100 opcaity-100" : "scale-125 opacity-0"
      )}
      onClick={(e) => e.stopPropagation()}
      {...otherProps}>
      <FaXmark
        size={32}
        className=" text-active hover:text-red-400 cursor-pointer absolute top-2 right-2"
        onClick={closeModal}
      />
      Modal
    </div>
  </div>
)

export default FieldSelectionModal
