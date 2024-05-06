import React from "react"
import { FiSave } from "react-icons/fi"
import colors from "../colors"

const TopBar = () => {
  return (
    <div className="flex items-center w-full h-20 shadow-sm">
      <button
        className={`flex items-center text-primary font-medium ml-20 p-2 rounded-md active:bg-[${colors.active}]  hover:cursor-pointer`}>
        <FiSave className="mr-1" />
        <span>Enregistrer</span>
      </button>
    </div>
  )
}

export default TopBar
