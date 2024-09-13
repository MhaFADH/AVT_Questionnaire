import { Checkbox } from "@mui/material"

const ExtendCheckboxOption = ({ label, behavior, valueName, component }) => (
  <div
    onClick={behavior}
    className="flex  items-center cursor-pointer bg-primary text-white w-2/3 rounded-md hover:bg-lightPrimary active:bg-darkerPrimary">
    <div className="ml-auto w-full text-center">
      <span className="ml-auto text-maintheme font-medium">{label}</span>
    </div>
    <Checkbox
      className="mr-auto"
      sx={{
        color: "white",
        "&.Mui-checked": {
          color: "white"
        }
      }}
      checked={component[valueName]}
    />
  </div>
)

export default ExtendCheckboxOption
