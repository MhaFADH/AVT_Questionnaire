import { Reorder, useDragControls } from "framer-motion"
import { FaClone, FaGripLines, FaXmark } from "react-icons/fa6"
import { useAppContext } from "../AppContext"
import { fields, typeIcons } from "../../types"
import { FormControlLabel } from "@mui/material"
import Switch from "@mui/material/Switch"
import { FaCopy } from "react-icons/fa"

const ExtendFieldTemplate = ({ field, pageIndex, fieldIndex }) => {
  const control = useDragControls()
  const {
    reducer: { dispatch, mainState },
    toolbox: { handlePosition }
  } = useAppContext()
  const handleDelete = () => {
    dispatch({ type: "removeField", payload: { pageIndex, fieldIndex } })
  }

  return (
    <Reorder.Item
      key={field.id}
      value={field}
      dragListener={false}
      dragControls={control}
      whileHover={{ scale: 1.01 }}
      onClick={(e) =>
        handlePosition(
          { index: fieldIndex, id: field.id, component: field.type, pageIndex },
          e
        )
      }
      className="flex flex-col items-center bg-quaternary w-full shadow-md rounded-xl h-1/4 relative pt-2">
      <FaGripLines
        size={24}
        className=" text-primary hover:cursor-move"
        onPointerDown={(e) => control.start(e)}
      />

      <div className="absolute top-2 left-2 text-primary">
        {typeIcons[field.type]}
      </div>

      {mainState.pages[pageIndex].fields.length > 1 && (
        <FaXmark
          size={24}
          className=" text-active hover:text-red-400 cursor-pointer absolute top-2 right-2"
          onClick={handleDelete}
        />
      )}
      <div className="h-full rounded-b-xl w-full">
        {fields[field.type](field, fieldIndex, pageIndex)}
      </div>
      <div
        className="w-full flex justify-end h-12 border-t-2 items-center px-7"
        onClick={(e) => e.stopPropagation()}>
        <FaCopy
          size={25}
          className="text-primary hover:text-tertiary hover:cursor-pointer"
          onClick={() =>
            dispatch({ type: "copyField", payload: { pageIndex, fieldIndex } })
          }
        />
        <FormControlLabel
          className=""
          control={
            <Switch
              checked={mainState.pages[pageIndex].fields[fieldIndex].mandatory}
              onClick={(e) => {
                e.stopPropagation()
                dispatch({
                  type: "setMandatory",
                  payload: { pageIndex, fieldIndex }
                })
              }}
            />
          }
          labelPlacement="start"
          label="Obligatoire"
        />
      </div>
    </Reorder.Item>
  )
}

export default ExtendFieldTemplate
