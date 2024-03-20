import {
  FormControl,
  TextField,
  Popover,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
import CustomSelect from "./components/CustomSelect";
import clsx from "clsx";
import PickList from "./components/PickList";

const GridRowsProp = [
  { id: 1, col1: "Hello" },
  { id: 2, col1: "DataGridPro" },
  { id: 3, col1: "MUI" },
];

const GridColDef = [{ field: "col1", headerName: "Column 1", width: 150 }];

function App() {
  const [modelUtil, setModelUtil] = useState("");
  const [typeQuest, setTypeQuest] = useState("");
  const [langue, setLangue] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [anchorEl, setAnchorEl] = useState("");
  const [pickList, setPickList] = useState("");

  return (
    <>
      <div
        className={clsx(
          "flex flex-col h-screen w-full text-center justify-center",
          anchorEl ? " blur-sm" : "blur-none"
        )}
      >
        <form>
          <div className=" flex flex-col bg-slate-100 p-7 rounded-2xl mx-10 shadow-2xl">
            <h1 className=" text-xl mb-9">Description</h1>
            <div className="flex">
              <div className=" flex flex-col w-full items-center">
                <div className="w-3/5  space-y-3">
                  {/* <PickList
                    value={pickList}
                    setValue={setPickList}
                    setAnchorEl={setAnchorEl}
                    data={GridRowsProp}
                    columns={GridColDef}
                    concernedCol="col1"
                    label={"Langue"}
                  /> */}
                  <FormControl fullWidth>
                    <TextField
                      variant="outlined"
                      size="small"
                      label="Texte d'entête"
                    />
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <CustomSelect
                      label="Evaluation"
                      displayValues={["hey", "tt", "bjr", "Vide"]}
                      value={typeQuest}
                      setValue={setTypeQuest}
                    />
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <CustomSelect
                      label="Mode d'utilisation"
                      displayValues={["hey", "tt", "bjr", "Vide"]}
                      value={modelUtil}
                      setValue={setModelUtil}
                    />
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <CustomSelect
                      label="Langue"
                      displayValues={["Français", "Arabe", "Anglais", "Vide"]}
                      value={langue}
                      setValue={setLangue}
                    />
                  </FormControl>
                </div>
              </div>
              <div className="flex flex-col w-full items-center">
                <div className="w-3/5  space-y-3">
                  <FormControl fullWidth>
                    <div className="flex items-center">
                      <FormLabel className="mr-4">QR Code ?</FormLabel>
                      <RadioGroup
                        row={true}
                        value={qrCode}
                        onChange={(val) => setQrCode(val.target.value)}
                      >
                        <FormControlLabel
                          value="Oui"
                          control={<Radio />}
                          label="Oui"
                        />
                        <FormControlLabel
                          value="Non"
                          control={<Radio />}
                          label="Non"
                        />
                      </RadioGroup>
                    </div>
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      variant="outlined"
                      size="small"
                      label="Texte d'entête"
                      type="number"
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
