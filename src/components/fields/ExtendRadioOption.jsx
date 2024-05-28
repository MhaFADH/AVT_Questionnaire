import { FormControlLabel, Radio } from "@mui/material"

const ExtendRadioOption = ({ label, value = null }) => (
  <>
    <FormControlLabel
      value={value ?? label}
      control={<Radio />}
      label={label}
    />
  </>
)

export default ExtendRadioOption
