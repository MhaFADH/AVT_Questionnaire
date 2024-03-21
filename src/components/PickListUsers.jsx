import { FaUserPlus } from "react-icons/fa";
import { TextField, Popover } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const PickListUsers = ({
  value,
  setValue,
  data,
  columns,
  concernedCol,
  label,
  setAnchorEl,
}) => {
  const [rowSelectionModel, setRowSelectionModel] = useState("");
  const [localAnchorEl, setLocalAnchorEl] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setLocalAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLocalAnchorEl(null);
  };

  const open = Boolean(localAnchorEl);
  const id = localAnchorEl ? "simple-popover" : undefined;

  const handleRowSelection = async (newRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel);
  };

  return (
    <div className="flex relative">
      <TextField
        disabled
        size="small"
        value={value.join(", ")}
        className=" text-black disabled:text-black"
        placeholder={label}
        fullWidth
        multiline={true}
      ></TextField>
      <FaUserPlus
        className="hover:bg-slate-100 hover:cursor-pointer hover:animate-pulse absolute right-3 top-2.5"
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
          alignItems: "center",
        }}
      >
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            checkboxSelection
            rowSelectionModel={rowSelectionModel}
            onRowSelectionModelChange={async (newRowSelectionModel) => {
              await handleRowSelection(newRowSelectionModel);
              console.log(newRowSelectionModel);
              setValue(
                newRowSelectionModel.map((val) => data[val - 1][concernedCol])
              );
            }}
            rows={data}
            columns={columns}
          />
        </div>
      </Popover>
    </div>
  );
};

export default PickListUsers;
