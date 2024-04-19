import { FormControlLabel, Radio } from "@mui/material"

const RadioOption = ({ label, value = null }) => (
  <>
    <FormControlLabel
      value={value ?? label}
      control={<Radio />}
      label={label}
    />
  </>
)

export default RadioOption
