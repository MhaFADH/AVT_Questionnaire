import { InputLabel, Select, MenuItem, FormControl } from "@mui/material"

const CustomSelect = ({
  value,
  setValue,
  displayValues,
  label,
  ...otherProps
}) => (
  <>
    <FormControl fullWidth size="small">
      <InputLabel id={label.replace(" ", "_")}>{label}</InputLabel>
      <Select
        labelId="TypeLabel"
        value={value}
        label={label}
        onChange={(agee) => {
          setValue(agee.target.value === "Vide" ? null : agee.target.value)
        }}
        {...otherProps}>
        {displayValues.map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </>
)

export default CustomSelect
