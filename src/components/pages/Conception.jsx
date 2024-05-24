/* eslint-disable no-invalid-this */
import ExtendPage from "../conception_field/ExtendPage"
import { useAppContext } from "../AppContext"
import { Reorder } from "framer-motion"

const Conception = () => {
  const {
    reducer: {
      mainState: { pages },
      dispatch
    }
  } = useAppContext()
  const handleUpdate = (newPages) =>
    dispatch({ type: "setNewPagesArray", payload: { newPages } })
  const handlePosition = (e) => {
    e.preventDefault()
    const toolbox = document.getElementById("toolbox")
    toolbox.style.top = `${
      e.currentTarget.getBoundingClientRect().top -
      toolbox.getBoundingClientRect().height
    }px`
  }

  return (
    <div className="flex" style={{ scrollBehavior: "smooth" }}>
      <div className="flex space-y-4 w-full mr-4">
        <div className="flex flex-col items-center w-8 bg-gray-300">
          <div
            className="sticky top-0 bg-yellow-200 h-40 w-full transition-all ease-in-out duration-450"
            id="toolbox">
            TB TB TB TB TB TB
          </div>
        </div>
        <div className="w-full">
          <Reorder.Group
            values={pages}
            onReorder={handleUpdate}
            className=" space-y-4">
            {pages.map((page) => (
              <ExtendPage
                onClick={handlePosition}
                value={page}
                key={page.id}
                dispatch={dispatch}
              />
            ))}
          </Reorder.Group>
          <button
            onClick={() => dispatch({ type: "addPage" })}
            className=" bg-maintheme rounded-md h-14 border-2 border-tertiary border-dashed text-tertiary select-none hover:bg-active w-full my-4">
            Ajouter une page
          </button>
        </div>
      </div>
    </div>
  )
}

export default Conception
