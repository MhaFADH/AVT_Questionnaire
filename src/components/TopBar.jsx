import React from "react"
import { FiSave } from "react-icons/fi"
import clsx from "clsx"
import { FaCogs, FaEye, FaEyeSlash } from "react-icons/fa"
import { useAppContext } from "./AppContext"
import ExtendDivider from "./fields/ExtendDivider"
import ExtendButton from "./fields/ExtendButton"

const TopBar = ({ className }) => {
  const {
    reducer: { dispatch }
  } = useAppContext()

  return (
    <div className={clsx("flex items-center w-full h-20 shadow-sm", className)}>
      <ExtendButton
        label="Enregistrer"
        className="ml-10"
        onClick={() => dispatch("save")}>
        <FiSave className="mr-1" />
      </ExtendButton>
      <ExtendDivider />
      <ExtendButton label="Outils" onClick={() => dispatch("tools")}>
        <FaCogs className="mr-1" />
      </ExtendButton>
      <ExtendDivider />
      <ExtendButton
        label="Règles conditionnelles"
        onClick={() => dispatch("conditionnalRules")}>
        <FaEyeSlash className="mr-1" />
      </ExtendButton>
      <ExtendDivider />
      <ExtendButton
        label="Visualiser en ligne"
        onClick={() => dispatch("showOnline")}>
        <FaEye className="mr-1" />
      </ExtendButton>
    </div>
  )
}

export default TopBar
