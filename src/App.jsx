import {
  FormControl,
  TextField,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import { useState, useRef } from "react";
import CustomSelect from "./components/CustomSelect";
import clsx from "clsx";
import PickListUsers from "./components/PickListUsers";
import { MdOutlineFileUpload } from "react-icons/md";
import FormTemplate from "./components/FormTemplate";
import ColContainer from "./components/ColMainContainer";
import ColMainContainer from "./components/ColMainContainer";
import Col from "./components/Col";

const GridRowsProp = [
  { id: 1, col1: "User 1" },
  { id: 2, col1: "User 2" },
  { id: 3, col1: "User 3" },
  { id: 4, col1: "User 4" },
  { id: 5, col1: "User 5" },
  { id: 6, col1: "User 6" },
  { id: 7, col1: "User 7" },
  { id: 8, col1: "User 8" },
  { id: 9, col1: "User 9" },
  { id: 10, col1: "User 10" },
];

const GridColDef = [{ field: "col1", headerName: "Users", width: 150 }];

function App() {
  const [modelUtil, setModelUtil] = useState("");
  const [typeQuest, setTypeQuest] = useState("");
  const [txtEntete, setTxtEntete] = useState("");
  const [txtIntro, setTxtIntro] = useState("");
  const [txtRemerciement, setTxtRemerciement] = useState("");
  const [langue, setLangue] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [anchorEl, setAnchorEl] = useState("");
  const [pickListUsr, setPickListUsr] = useState([]);
  const [nbQuest, setNbQuest] = useState("");
  const [files, setFiles] = useState("Aucun fichier");
  const finput = useRef(null);

  return (
    <>
      <FormTemplate title="Description" blurAnchor={anchorEl}>
        <ColMainContainer>
          <ColContainer>
            <Col>
              <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Texte d'entête"
                  value={txtEntete}
                  onChange={(val) => setTxtEntete(val.target.value)}
                />
              </FormControl>
              <FormControl fullWidth size="small">
                <CustomSelect
                  label="Evaluation"
                  displayValues={[
                    "Evaluation 1",
                    "Evaluation 2",
                    "Evaluation 3",
                    "Vide",
                  ]}
                  value={typeQuest}
                  setValue={setTypeQuest}
                />
              </FormControl>
              <FormControl fullWidth size="small">
                <CustomSelect
                  label="Mode d'utilisation"
                  displayValues={["Mode 1", "Mode 2", "Mode 3", "Vide"]}
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
            </Col>
          </ColContainer>
          <ColContainer>
            <Col>
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
                  label="Nombre de bonnes réponses requises"
                  type="number"
                  value={nbQuest}
                  onChange={(val) => setNbQuest(val.target.value)}
                />
              </FormControl>
              <PickListUsers
                value={pickListUsr}
                setValue={setPickListUsr}
                setAnchorEl={setAnchorEl}
                data={GridRowsProp}
                columns={GridColDef}
                concernedCol="col1"
                label="Destinataire(s) réponses"
              />
              <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Quelle sera la première question ?"
                  type=""
                  value={nbQuest}
                  onChange={(val) => setNbQuest(val.target.value)}
                />
              </FormControl>
            </Col>
          </ColContainer>
        </ColMainContainer>
        <div className="flex flex-col w-full items-center mt-4">
          <div className="w-4/5  space-y-3">
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                size="small"
                label="Texte d'introduction"
                multiline={true}
                type=""
                value={txtIntro}
                onChange={(val) => setTxtIntro(val.target.value)}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                size="small"
                label="Texte de remerciement"
                multiline={true}
                value={txtRemerciement}
                onChange={(val) => setTxtRemerciement(val.target.value)}
              />
            </FormControl>
            <div className="flex relative">
              <TextField
                fullWidth
                size="small"
                value={files}
                disabled
                multiline
              ></TextField>
              <button
                className="absolute right-0 top-2.5 mr-3"
                variant="contained"
                component="label"
              >
                <MdOutlineFileUpload
                  size={22}
                  onClick={() => finput.current.click()}
                />
                <input
                  ref={finput}
                  className="hidden"
                  type="file"
                  multiple
                  onChange={(val) => {
                    console.log(val.target.files[0].name);

                    setFiles(
                      Object.entries(val.target.files)
                        .map(([_, value]) => {
                          return value.name;
                        })
                        .join("\n")
                    );
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </FormTemplate>
    </>
  );
}

export default App;
