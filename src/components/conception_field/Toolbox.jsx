import React from "react"
import { componentType, typeIcons } from "../../types"
import { useAppContext } from "../AppContext"

const styles = {
  toolboxButton:
    "bg-primary text-maintheme rounded-full p-2 my-2 hover:text-primary hover:bg-maintheme active:bg-active"
}
const Toolbox = () => {
  const {
    reducer: { dispatch },
    toolbox: { toolboxSelection }
  } = useAppContext()
  const handleAddComponent = (componentToAdd) => {
    dispatch({
      type: "addComponent",
      payload: { toolboxSelection, componentToAdd }
    })
  }

  return (
    <div className="flex flex-col items-center w-14 mr-4">
      <div
        className="flex flex-col items-center absolute justify-evenly bg-primary shadow-lg w-12 rounded-xl transition-all ease-in-out duration-450"
        id="toolbox">
        <button
          className={styles.toolboxButton}
          onClick={() => handleAddComponent(componentType.TEXT)}>
          {typeIcons[componentType.TEXT]}
        </button>
        <button
          className={styles.toolboxButton}
          onClick={() => handleAddComponent(componentType.NUMBER)}>
          {typeIcons[componentType.NUMBER]}
        </button>
        <button
          className={styles.toolboxButton}
          onClick={() => handleAddComponent(componentType.DATE)}>
          {typeIcons[componentType.DATE]}
        </button>
        <button
          className={styles.toolboxButton}
          onClick={() => handleAddComponent(componentType.PAGE)}>
          {typeIcons[componentType.PAGE]}
        </button>
      </div>
    </div>
  )
}

export default Toolbox
