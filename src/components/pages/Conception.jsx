import ExtendPage from "../conception_field/ExtendPage"
import { useAppContext } from "../AppContext"
import { Reorder, useDragControls } from "framer-motion"
import clsx from "clsx"

const Conception = () => {
  const {
    reducer: {
      mainState: { pages },
      dispatch
    }
  } = useAppContext()
  const handleUpdate = (newPages) =>
    dispatch({ type: "setNewPagesArray", payload: { newPages } })

  return (
    <div className="flex">
      <div className="flex flex-col space-y-4 w-full">
        <Reorder.Group
          values={pages}
          onReorder={handleUpdate}
          className=" space-y-4">
          {pages.map((page) => (
            <ExtendPage value={page} key={page.id} dispatch={dispatch} />
          ))}
        </Reorder.Group>
        <button
          onClick={() => dispatch({ type: "addPage" })}
          className=" bg-maintheme rounded-md h-14 border-2 border-tertiary border-dashed text-tertiary select-none hover:bg-active">
          Ajouter une page
        </button>
      </div>
    </div>
  )
}

export default Conception
