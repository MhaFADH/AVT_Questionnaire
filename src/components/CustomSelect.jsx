import { InputLabel, Select, MenuItem } from "@mui/material";

const CustomSelect = (props) => {
  const { value, setValue, displayValues, label, ...otherProps } = props;

  return (
    <>
      <InputLabel id={label.replace(" ", "_")}>{label}</InputLabel>
      <Select
        labelId="TypeLabel"
        value={value}
        label={label}
        onChange={(agee) => {
          setValue(agee.target.value === "Vide" ? null : agee.target.value);
        }}
        {...otherProps}
      >
        {displayValues.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default CustomSelect;
