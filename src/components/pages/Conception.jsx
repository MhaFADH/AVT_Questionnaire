import ExtendPage from "../conception_field/ExtendPage"
import { useAppContext } from "../AppContext"
import { Reorder, AnimatePresence } from "framer-motion"
import { componentType } from "../../types"
import Toolbox from "../conception_field/Toolbox"

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
      <div className="flex space-y-4 w-full mr-4">
        <Toolbox />
        <div className="w-full">
          <Reorder.Group
            values={pages}
            onReorder={handleUpdate}
            className=" space-y-4">
            <AnimatePresence>
              {pages.map((page, index) => (
                <ExtendPage
                  id={index + componentType.PAGE + page.id}
                  index={index}
                  value={page}
                  key={page.id}
                />
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </div>
      </div>
    </div>
  )
}

export default Conception
