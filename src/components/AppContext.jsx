import { createContext, useContext, useReducer, useState } from "react"
import save from "../handlers/save"
import tools from "../handlers/tools"
import showOnline from "../handlers/show-online"
import conditionnalRules from "../handlers/conditionnal-rules"
import removePage from "../handlers/remove-page"
import updatePages from "../handlers/update-pages"
import addComponent from "../handlers/add-component"
import updateFields from "../handlers/update-fields"
import removeField from "../handlers/remove-field"
import { componentType } from "../types"

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
          label: "Text Field",
          question: "Question",
          description: "Description"
        }
      ],
      fieldsCounter: 1
    }
  ],
  pageCounter: 1
}
const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "save":
      return save(state)

    case "tools":
      return tools(state)

    case "showOnline":
      return showOnline(state)

    case "conditionnalRules":
      return conditionnalRules(state)

    case "removePage":
      return removePage(state, payload)

    case "setNewPagesArray":
      return updatePages(state, payload)

    case "addComponent":
      return addComponent(state, payload)

    case "reorderFields":
      return updateFields(state, payload)

    case "removeField":
      return removeField(state, payload)

    default:
      return { ...state }
  }
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
