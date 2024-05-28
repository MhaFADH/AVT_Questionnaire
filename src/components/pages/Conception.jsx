import ExtendPage from "../conception_field/ExtendPage"
import { useAppContext } from "../AppContext"
import { Reorder } from "framer-motion"
import { componentType, typeIcons } from "../../types"

const styles = {
  toolboxButton:
    "bg-primary text-maintheme rounded-full p-2 my-2 hover:text-primary hover:bg-maintheme active:bg-active"
}
const Conception = () => {
  const {
    reducer: {
      mainState: { pages },
      dispatch
    },
    toolbox: { toolboxSelection, handlePosition }
  } = useAppContext()
  const handleUpdate = (newPages) =>
    dispatch({ type: "setNewPagesArray", payload: { newPages } })
  const handleAddComponent = (componentToAdd) => {
    dispatch({
      type: "addComponent",
      payload: { toolboxSelection, componentToAdd }
    })
  }

  return (
    <div className="flex">
      <div className="flex space-y-4 w-full mr-4">
        <div className="flex flex-col items-center w-14 mr-4">
          <div
            className="flex flex-col items-center sticky justify-evenly bg-primary shadow-lg w-12 rounded-xl transition-all ease-in-out duration-450"
            id="toolbox">
            <button
              className={styles.toolboxButton}
              onClick={() => handleAddComponent(componentType.TEXT)}>
              {typeIcons[componentType.TEXT]}
            </button>
            <button
              className={styles.toolboxButton}
              onClick={() => handleAddComponent(componentType.NUMBER)}>
              {typeIcons[componentType.NUMBER]}
            </button>
            <button
              className={styles.toolboxButton}
              onClick={() => handleAddComponent(componentType.DATE)}>
              {typeIcons[componentType.DATE]}
            </button>
            <button
              className={styles.toolboxButton}
              onClick={() => handleAddComponent(componentType.PAGE)}>
              {typeIcons[componentType.PAGE]}
            </button>
          </div>
        </div>
        <div className="w-full">
          <Reorder.Group
            values={pages}
            onReorder={handleUpdate}
            className=" space-y-4">
            {pages.map((page, index) => (
              <ExtendPage
                index={index}
                onClick={(e) =>
                  handlePosition(
                    {
                      index,
                      id: page.id,
                      component: componentType.PAGE,
                      pageIndex: index
                    },
                    e
                  )
                }
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
