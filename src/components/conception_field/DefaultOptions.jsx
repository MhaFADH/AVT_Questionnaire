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
  const fields = [
    ["mandatory", "Obligatoire"],
    ["com", "Commentaire"],
    ["comMandatory", "Commentaire obligatoire"],
    ["attachment", "Pièce-jointe attendue"]
  ]

  return (
    <div className="w-full flex flex-col items-center space-y-3">
      {fields.map((field) => (
        <ExtendCheckboxOption
          key={field[0]}
          valueName={field[0]}
          component={component}
          label={field[1]}
          behavior={() => handleClick(field[0])}
        />
      ))}
    </div>
  )
}

export default DefaultOptions
