import { TextField } from "@mui/material"
import React, { useRef } from "react"
import { MdOutlineFileUpload } from "react-icons/md"

const UploadField = ({ setter, getter }) => {
  const finput = useRef(null)

  return (
    <div className="flex relative">
      <TextField
        fullWidth
        size="small"
        value={getter}
        disabled
        multiline></TextField>
      <button className="absolute right-0 top-2.5 mr-3">
        <MdOutlineFileUpload size={22} onClick={() => finput.current.click()} />
        <input
          ref={finput}
          className="hidden"
          type="file"
          multiple
          onChange={(val) => {
            setter(
              Object.entries(val.target.files)
                .map(([_, value]) => value.name)
                .join("\n")
            )
          }}
        />
      </button>
    </div>
  )
}

export default UploadField
