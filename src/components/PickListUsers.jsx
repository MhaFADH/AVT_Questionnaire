import { FaUserPlus } from "react-icons/fa";
import { TextField, Popover, Button } from "@mui/material";
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
  const [selection, setSelection] = useState([]);
  const [validatedSelection, setValidatedSelection] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setLocalAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setRowSelectionModel(validatedSelection);
    setAnchorEl(null);
    setLocalAnchorEl(null);
  };

  const open = Boolean(localAnchorEl);
  const id = localAnchorEl ? "simple-popover" : undefined;

  const handleValidation = () => {
    setValidatedSelection(rowSelectionModel);
    setValue(rowSelectionModel.map((val) => data[val - 1][concernedCol]));
    handleClose();
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
        <div
          className="flex flex-col justify-center text-center"
          style={{ height: "100%", minWidth: "100%" }}
        >
          <DataGrid
            hideFooterSelectedRowCount={true}
            loading={data.length === 0}
            density="compact"
            className="m-16 mb-6"
            checkboxSelection
            rowSelectionModel={rowSelectionModel}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
              setSelection(newRowSelectionModel);
            }}
            rows={data}
            columns={columns}
          />
          <div className="flex justify-evenly w-full h-2/3 mb-6">
            <Button variant="contained" onClick={handleValidation}>
              Valider
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Annuler
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default PickListUsers;
