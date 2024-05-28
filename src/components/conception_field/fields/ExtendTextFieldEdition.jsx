import { TextField } from "@mui/material"

const ExtendTextFieldEdition = ({ fieldProperties, fieldIndex, pageIndex }) => {
  const colProperties = "w-7/12 m-2 flex flex-col items-center space-y-4 p-2"

  return (
    <div className="w-full h-full rounded-b-xl flex flex-row justify-evenly">
      <div className={colProperties}>
        <TextField
          fullWidth
          label={fieldProperties.labelLabel}
          placeholder={fieldProperties.labelPlaceholder}
          className="bg-hover shadow-md"
        />
        <TextField
          fullWidth
          label={fieldProperties.descriptionLabel}
          placeholder={fieldProperties.descriptionPlaceholder}
          className="bg-hover shadow-md"
        />
      </div>
      <div className={colProperties}>
        <TextField
          fullWidth
          label={fieldProperties.questionLabel}
          placeholder={fieldProperties.questionPlaceholder}
          className="bg-hover shadow-md"
        />
      </div>
    </div>
  )
}

export default ExtendTextFieldEdition
