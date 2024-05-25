import { Reorder, useDragControls } from "framer-motion"
import { FaGripLines, FaXmark } from "react-icons/fa6"
import { useAppContext } from "../AppContext"

const ExtendTextField = ({ field, pageIndex, index }) => {
  const control = useDragControls()
  const {
    reducer: { dispatch, mainState }
  } = useAppContext()
  const handleDelete = () => {
    dispatch({ type: "removeField", payload: { pageIndex, index } })
  }

  return (
    <Reorder.Item
      key={field.id}
      value={field}
      dragListener={false}
      dragControls={control}
      className="flex flex-col items-center bg-quaternary w-full shadow-md rounded-xl h-36 relative pt-2">
      <FaGripLines
        size={24}
        className=" text-primary hover:cursor-move"
        onPointerDown={(e) => control.start(e)}
      />

      {mainState.pages[pageIndex].fields.length > 1 && (
        <FaXmark
          size={24}
          className=" text-active hover:text-red-400 cursor-pointer absolute top-2 right-2"
          onClick={handleDelete}
        />
      )}
      <div></div>
    </Reorder.Item>
  )
}

export default ExtendTextField
