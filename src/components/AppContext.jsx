import { createContext, useContext, useReducer, useState } from "react"
import { componentType } from "../types"
import reducerActions from "../reducer-actions"

const AppContext = createContext()
const initState = {
  isEdit: false,
  pages: [
    {
      id: 1,
      fields: [
        {
          id: 1,
          type: componentType.TEXT,
          label: "",
          labelLabel: "Label",
          labelPlaceholder: "Veuillez saisir un label",
          question: "",
          questionLabel: "Question",
          questionPlaceholder: "Veuillez saisir une question",
          description: "",
          descriptionLabel: "Description",
          descriptionPlaceholder: "Veuillez saisir une description",
          mandatory: false
        }
      ],
      fieldsCounter: 1
    }
  ],
  pageCounter: 1
}
const reducer = (state, action) => {
  const { type, payload } = action

  return reducerActions[type](state, payload)
}

export const AppContextProvider = (props) => {
  const [mainState, dispatch] = useReducer(reducer, initState)
  const [toolboxSelection, setToolboxSelection] = useState({
    index: 0,
    id: 1,
    component: componentType.TEXT,
    pageIndex: 0
  })
  const handlePosition = (componentProperties, e) => {
    e.preventDefault()
    setToolboxSelection(componentProperties)
    const toolbox = document.getElementById("toolbox")
    toolbox.style.top = `${
      e.target.getBoundingClientRect().top -
      toolbox.getBoundingClientRect().height / 1.5
    }px`
  }

  return (
    <AppContext.Provider
      {...props}
      value={{
        reducer: { mainState, dispatch },
        toolbox: { toolboxSelection, setToolboxSelection, handlePosition }
      }}
    />
  )
}
export const useAppContext = () => useContext(AppContext)

export default AppContext
