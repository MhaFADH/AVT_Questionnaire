import { FormControl, RadioGroup, FormLabel } from "@mui/material"

const CustomRadioInline = ({ getter, setter, label, ...otherProps }) => (
  <>
    <FormControl fullWidth>
      <div className="flex items-center">
        <FormLabel className="mr-4">{label}</FormLabel>
        <RadioGroup
          row={true}
          value={getter}
          onChange={(val) => setter(val.target.value)}
          {...otherProps}>
          {otherProps.children}
        </RadioGroup>
      </div>
    </FormControl>
  </>
)

export default CustomRadioInline
