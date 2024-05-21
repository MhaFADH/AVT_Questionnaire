import { createContext, useContext, useReducer, useState } from "react"
import save from "../handlers/save"
import tools from "../handlers/tools"
import showOnline from "../handlers/show-online"
import conditionnalRules from "../handlers/conditionnal-rules"
import addPage from "../handlers/add-page"
import removePage from "../handlers/remove-page"
import updatePages from "../handlers/update-pages"
import addField from "../handlers/add-field"

const AppContext = createContext()
const initState = {
  isEdit: false,
  pages: [],
  pageCounter: 0
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

    case "addPage":
      return addPage(state)

    case "removePage":
      return removePage(state, payload)

    case "setNewPagesArray":
      return updatePages(state, payload)

    case "addField":
      return addField(state, payload)

    default:
      return { ...state }
  }
}

export const AppContextProvider = (props) => {
  const [mainState, dispatch] = useReducer(reducer, initState)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AppContext.Provider
      {...props}
      value={{
        reducer: { mainState, dispatch },
        blurState: { isModalOpen, setIsModalOpen }
      }}
    />
  )
}
export const useAppContext = () => useContext(AppContext)

export default AppContext
