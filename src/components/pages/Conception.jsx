import ExtendPage from "../conception_field/ExtendPage"
import { useAppContext } from "../AppContext"
import { Reorder } from "framer-motion"
import { componentType } from "../../types"
import Toolbox from "../conception_field/Toolbox"

const Conception = () => {
  const {
    reducer: {
      mainState: { pages },
      dispatch
    },
    toolbox: { handlePosition }
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
            {pages.map((page, index) => (
              <ExtendPage
                id={index + componentType.PAGE + page.id}
                index={index}
                value={page}
                key={page.id}
              />
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  )
}

export default Conception
