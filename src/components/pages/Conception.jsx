import ExtendPage from "../conception_field/ExtendPage"
import { useAppContext } from "../AppContext"
import { Reorder, useDragControls } from "framer-motion"

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
      <div className="flex flex-col w-2/3 space-y-4">
        <Reorder.Group
          values={pages}
          onReorder={handleUpdate}
          className=" space-y-4">
          {pages.map((page) => (
            <ExtendPage key={page} pageNumber={page} dispatch={dispatch} />
          ))}
        </Reorder.Group>
        <button
          onClick={() => dispatch({ type: "addPage" })}
          className=" bg-maintheme rounded-md h-14 border-2 border-tertiary border-dashed text-tertiary select-none hover:bg-active">
          Ajouter une page
        </button>
      </div>
      <div className="mx-7 rounded-md w-1/3 bg-primary">Device spot</div>
    </div>
  )
}

export default Conception
