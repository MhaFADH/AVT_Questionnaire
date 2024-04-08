import { FormControl } from "@mui/base"
import { TextField } from "@mui/material"

const CustomTextField = ({ getter, setter, label, ...otherProps }) => (
  <FormControl>
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      label={label}
      value={getter}
      onChange={(val) => setter(val.target.value)}
      {...otherProps}
    />
  </FormControl>
)

export default CustomTextField
