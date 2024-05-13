import { createContext, useContext, useReducer } from "react"
import save from "../handlers/save"
import tools from "../handlers/tools"
import showOnline from "../handlers/show-online"
import conditionnalRules from "../handlers/conditionnal-rules"

const AppContext = createContext()
const initState = {
  isEdit: false
}
const reducer = (state, action) => {
  switch (action) {
    case "save":
      return save(state)

    case "tools":
      return tools(state)

    case "showOnline":
      return showOnline(state)

    case "conditionnalRules":
      return conditionnalRules(state)

    default:
      return { ...state }
  }
}

export const AppContextProvider = (props) => {
  const [mainState, dispatch] = useReducer(reducer, initState)

  return (
    <AppContext.Provider
      {...props}
      value={{
        reducer: { mainState, dispatch }
      }}
    />
  )
}
export const useAppContext = () => useContext(AppContext)

export default AppContext
