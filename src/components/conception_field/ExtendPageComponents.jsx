import React, { useState } from "react"
import { useAppContext } from "../AppContext"
import FieldSelectionModal from "../FieldSelectionModal"
import clsx from "clsx"

const ExtendPageComponents = ({ page, dispatch, ...otherProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-transparent m-4 rounded-md select-none">
        {page.fields.length === 0 && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-1/2 bg-tertiary rounded-md h-14 border-tertiary text-maintheme select-none  font-medium">
            Ajouter un champ
          </button>
        )}
      </div>

      <FieldSelectionModal
        className={clsx(
          "fixed inset-0 flex flex-col items-center justify-center bg-black/20",
          isModalOpen ? "visible bg-black/20" : "invisible"
        )}
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default ExtendPageComponents
