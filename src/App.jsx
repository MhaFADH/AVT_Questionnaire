import { useState } from "react"
import CustomSelect from "./components/ExtendSelect"
import PickListUsers from "./components/ExtendPickListUsers"
import clsx from "clsx"
import CustomTextField from "./components/ExtendTextField"
import CustomNumberField from "./components/ExtendNumberField"
import UploadField from "./components/ExtendUploadField"
import CustomRadioInline from "./components/ExtendRadioInline"
import RadioOption from "./components/ExtendRadioOption"
import FormDesigner from "./components/FormDesigner/FormDesigner"

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
  { id: 10, col1: "User 10" }
]
const GridColDef = [{ field: "col1", headerName: "Users", width: 150 }]

function App() {
  const [editState, setEditState] = useState(false)
  const [modelUtil, setModelUtil] = useState("")
  const [typeQuest, setTypeQuest] = useState("")
  const [txtEntete, setTxtEntete] = useState("")
  const [txtIntro, setTxtIntro] = useState("")
  const [txtRemerciement, setTxtRemerciement] = useState("")
  const [langue, setLangue] = useState("")
  const [qrCode, setQrCode] = useState("")
  const [anchorEl, setAnchorEl] = useState("")
  const [pickListUsr, setPickListUsr] = useState([])
  const [nbQuest, setNbQuest] = useState("")
  const [nbRep, setNbRep] = useState("")
  const [files, setFiles] = useState("Aucun fichier")

  return (
    <div
      className={clsx(
        "flex flex-col justify-start text-center h-screen",
        anchorEl ? " blur-sm" : "blur-none"
      )}>
      <div className="rounded-2xl m-16 bg-gray-100">
        <div className="m-16">
          <table className=" text-center w-full" cellPadding="5">
            <tbody>
              <tr className=" font-semibold text-left text-2xl">
                <th>Détail</th>
                <th></th>
                <th className="flex">Détail</th>
              </tr>
              <tr>
                <td valign="top" width="49%"></td>
                <td valign="top" width="2%"></td>
                <td valign="top" width="49%"></td>
              </tr>
              <tr>
                <td>
                  <CustomTextField
                    label="Texte d'entête"
                    getter={txtEntete}
                    setter={setTxtEntete}
                  />
                </td>
                <td></td>
                <td>
                  <CustomSelect
                    label="Evaluation"
                    displayValues={[
                      "Evaluation 1",
                      "Evaluation 2",
                      "Evaluation 3",
                      "Vide"
                    ]}
                    value={typeQuest}
                    setValue={setTypeQuest}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <CustomSelect
                    label="Mode d'utilisation"
                    displayValues={["Mode 1", "Mode 2", "Mode 3", "Vide"]}
                    value={modelUtil}
                    setValue={setModelUtil}
                  />
                </td>
                <td></td>
                <td>
                  <CustomSelect
                    label="Langue"
                    displayValues={["Français", "Arabe", "Anglais", "Vide"]}
                    value={langue}
                    setValue={setLangue}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <CustomRadioInline
                    label="QR Code ?"
                    getter={qrCode}
                    setter={setQrCode}>
                    <RadioOption label="Oui" />
                    <RadioOption label="Non" />
                  </CustomRadioInline>
                </td>
                <td></td>
                <td>
                  <CustomNumberField
                    getter={nbRep}
                    setter={setNbRep}
                    label="Nombre de bonnes réponses requises"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <PickListUsers
                    value={pickListUsr}
                    setValue={setPickListUsr}
                    setAnchorEl={setAnchorEl}
                    data={GridRowsProp}
                    columns={GridColDef}
                    concernedCol="col1"
                    label="Destinataire(s) réponses"
                  />
                </td>
                <td></td>
                <td>
                  <CustomTextField
                    label="Quelle sera la première question ?"
                    getter={nbQuest}
                    setter={setNbQuest}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <CustomTextField
                    label="Texte d'introduction"
                    getter={txtIntro}
                    setter={setTxtIntro}
                    multiline={true}
                  />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <CustomTextField
                    label="Texte de remerciement"
                    getter={txtRemerciement}
                    setter={setTxtRemerciement}
                    multiline={true}
                  />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <UploadField getter={files} setter={setFiles} />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="m16">
            <FormDesigner />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
