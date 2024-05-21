import clsx from "clsx"
import React from "react"
import { FaXmark } from "react-icons/fa6"
import { useAppContext } from "./AppContext"

const FieldSelectionModal = ({
  pageId,
  isModalOpen,
  closeModal,
  className,
  ...otherProps
}) => {
  const {
    reducer: { dispatch }
  } = useAppContext()
  const handleAddField = (type) => {
    dispatch({ type: "addField", payload: { pageId, type } })
    closeModal()
  }

  return (
    <div className={className} onClick={closeModal}>
      <div
        className={clsx(
          "bg-maintheme rounded-md transition-all select-none h-1/2 w-1/4 px-10 py-7 space-y-4 flex flex-col items-center text-center",
          isModalOpen ? "scale-100 opcaity-100" : "scale-125 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
        {...otherProps}>
        <FaXmark
          size={32}
          className=" text-active hover:text-red-400 cursor-pointer absolute top-2 right-2"
          onClick={closeModal}
        />

        <button
          className=" font-medium bg-active hover:bg-hover w-full h-14 rounded-md"
          onClick={() => handleAddField("text")}>
          Ajouter un champ texte
        </button>
      </div>
    </div>
  )
}

export default FieldSelectionModal
