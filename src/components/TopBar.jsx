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
    <div
      className={clsx(
        "flex items-center w-full min-h-20 shadow-sm select-none",
        className
      )}>
      <ExtendButton
        label="Enregistrer"
        className="ml-10"
        onClick={() => dispatch({ type: "save" })}>
        <FiSave className="mr-1" />
      </ExtendButton>
      <ExtendDivider />
      <ExtendButton label="Outils" onClick={() => dispatch({ type: "tools" })}>
        <FaCogs className="mr-1" />
      </ExtendButton>
      <ExtendDivider />
      <ExtendButton
        label="Règles conditionnelles"
        onClick={() => dispatch({ type: "conditionnalRules" })}>
        <FaEyeSlash className="mr-1" />
      </ExtendButton>
      <ExtendDivider />
      <ExtendButton
        label="Visualiser en ligne"
        onClick={() => dispatch({ type: "showOnline" })}>
        <FaEye className="mr-1" />
      </ExtendButton>
    </div>
  )
}

export default TopBar
