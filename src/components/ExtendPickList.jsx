import { TiPlus } from "react-icons/ti"
import { TextField, Popover } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"

const PickList = ({
  value,
  setValue,
  data,
  columns,
  concernedCol,
  label,
  setAnchorEl
}) => {
  const [rowSelectionModel, setRowSelectionModel] = useState("")
  const [localAnchorEl, setLocalAnchorEl] = useState("")
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setLocalAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setLocalAnchorEl(null)
  }
  const open = Boolean(localAnchorEl)
  const id = localAnchorEl ? "simple-popover" : undefined
  const handleRowSelection = async (newRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel)
  }

  return (
    <div className="flex relative">
      <TextField
        disabled
        size="small"
        value={value}
        className=" text-black disabled:text-black"
        placeholder={label}
        fullWidth></TextField>
      <TiPlus
        className="rounded-full hover:bg-slate-100 hover:cursor-pointer hover:animate-pulse absolute right-3 top-2.5"
        onClick={handleClick}
        size={22}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={localAnchorEl}
        onClose={handleClose}
        anchorReference="none"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            rowSelectionModel={rowSelectionModel}
            onRowSelectionModelChange={async (newRowSelectionModel) => {
              await handleRowSelection(newRowSelectionModel)
              setValue(data[newRowSelectionModel - 1][concernedCol])
              handleClose()
            }}
            rows={data}
            columns={columns}
          />
        </div>
      </Popover>
    </div>
  )
}

export default PickList
