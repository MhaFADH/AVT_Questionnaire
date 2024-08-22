import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState
} from "react"
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
  const mainContainer = useRef(null)
  const [mainState, dispatch] = useReducer(reducer, initState)
  const [toolboxSelection, setToolboxSelection] = useState({
    index: 0,
    id: 1,
    component: componentType.TEXT,
    pageIndex: 0
  })
  const handlePosition = (componentProperties, e) => {
    const mainContainerRect = mainContainer.current.getBoundingClientRect()
    setToolboxSelection(componentProperties)
    const toolbox = document.getElementById("toolbox")
    const toolboxRect = toolbox.getBoundingClientRect()
    const toolboxHalf = toolboxRect.height / 2

    if (
      mainContainerRect.bottom <
      e.getBoundingClientRect().top + toolboxRect.height
    ) {
      toolbox.style.top = `${mainContainerRect.height - toolboxHalf}px`

      return
    }

    if (mainContainerRect.top > e.getBoundingClientRect().top) {
      toolbox.style.top = `${mainContainerRect.top}px`

      return
    }

    toolbox.style.top = `${e.getBoundingClientRect().top}px`
  }
  const handleScroll = () => {
    const element = document.getElementById(
      toolboxSelection.pageIndex +
        toolboxSelection.component +
        toolboxSelection.id
    )

    if (!element) {
      return
    }

    handlePosition(toolboxSelection, element)
  }

  useEffect(() => {
    if (mainContainer) {
      handleScroll()
      mainContainer.current.addEventListener("scroll", handleScroll)

      return () => {
        if (mainContainer.current) {
          mainContainer.current.removeEventListener("scroll", handleScroll)
        }
      }
    }
  }, [toolboxSelection])

  return (
    <AppContext.Provider
      {...props}
      value={{
        reducer: { mainState, dispatch },
        toolbox: {
          toolboxSelection,
          setToolboxSelection,
          handlePosition,
          handleScroll
        },
        refs: { mainContainer }
      }}
    />
  )
}
export const useAppContext = () => useContext(AppContext)

export default AppContext
