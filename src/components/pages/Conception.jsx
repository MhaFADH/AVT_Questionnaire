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
    const elementRect = e.currentTarget.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft

    const toolbox = document.getElementById("toolbox")

    const top = elementRect.top + scrollTop
    const left = elementRect.left + scrollLeft

    toolbox.style.position = "absolute"
    toolbox.style.top = top + "px"
    toolbox.style.left = left + "px"
  }

  return (
    <div className="flex">
      <div className="flex space-y-4 w-full scroll-smooth mr-4">
        <div className="flex flex-col justify-center items-center">
          <div className="sticky top-10 bottom-10 bg-yellow-200" id="toolbox">
            TOOLBOX
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
