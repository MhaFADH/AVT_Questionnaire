import { TextField } from "@mui/material"
import { useAppContext } from "../../AppContext"

const ExtendTextFieldEdition = ({ fieldProperties, fieldIndex, pageIndex }) => {
  const colProperties = "w-7/12 m-2 flex flex-col items-center space-y-4 p-2"
  const {
    reducer: { dispatch, mainState }
  } = useAppContext()
  const handleFieldContent = (e, name) => {
    dispatch({
      type: "editField",
      payload: {
        pageIndex,
        fieldIndex,
        field: { name, value: e.target.value }
      }
    })
  }

  return (
    <div className="w-full h-full rounded-b-xl flex flex-row justify-evenly">
      <div className={colProperties}>
        <TextField
          fullWidth
          label={fieldProperties.labelLabel}
          placeholder={fieldProperties.labelPlaceholder}
          value={fieldProperties.label}
          onChange={(e) => handleFieldContent(e, "label")}
          className="bg-hover shadow-md"
          onClick={(e) => e.stopPropagation()}
        />
        <TextField
          fullWidth
          label={fieldProperties.descriptionLabel}
          placeholder={fieldProperties.descriptionPlaceholder}
          value={fieldProperties.description}
          onChange={(e) => handleFieldContent(e, "description")}
          className="bg-hover shadow-md"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <div className={colProperties}>
        <TextField
          fullWidth
          label={fieldProperties.questionLabel}
          value={fieldProperties.question}
          placeholder={fieldProperties.questionPlaceholder}
          onChange={(e) => handleFieldContent(e, "question")}
          className="bg-hover shadow-md"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

export default ExtendTextFieldEdition
