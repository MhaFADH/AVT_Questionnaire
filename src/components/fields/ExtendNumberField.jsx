import { FormControl } from "@mui/base"
import { TextField } from "@mui/material"

const ExtendNumberField = ({ getter, setter, label, ...otherProps }) => (
  <FormControl>
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      label={label}
      type="number"
      value={getter}
      onChange={(val) => setter(val.target.value)}
      {...otherProps}
    />
  </FormControl>
)

export default ExtendNumberField
