import ExtendCheckboxOption from "../fields/ExtendCheckboxOption"
import { useAppContext } from "../AppContext"

const DefaultOptions = ({ pageIndex, fieldIndex }) => {
  const {
    reducer: { dispatch, mainState }
  } = useAppContext()
  const component = mainState.pages[pageIndex].fields[fieldIndex]
  const handleClick = (field) => {
    dispatch({
      type: "setDefaultOption",
      payload: { pageIndex, fieldIndex, field }
    })
  }

  return (
    <div className="w-full flex flex-col items-center space-y-3">
      <ExtendCheckboxOption
        valueName={"mandatory"}
        component={component}
        label={"Obligatoire"}
        behavior={() => handleClick("mandatory")}
      />
      <ExtendCheckboxOption
        valueName={"mandatory"}
        component={component}
        label={"Commentaire"}
        behavior={() => handleClick("com")}
      />
      <ExtendCheckboxOption
        valueName={"mandatory"}
        component={component}
        label={"Commentaire obligatoire"}
        behavior={() => handleClick("comMandatory")}
      />
      <ExtendCheckboxOption
        valueName={"mandatory"}
        component={component}
        label={"Pièce-jointe attendue"}
        behavior={() => handleClick("attachment")}
      />
    </div>
  )
}

export default DefaultOptions
