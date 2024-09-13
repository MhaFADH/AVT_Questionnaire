import { Reorder, useDragControls, motion } from "framer-motion"
import { useRef, useState } from "react"
import { BiChevronUp } from "react-icons/bi"
import { FaTrashCan } from "react-icons/fa6"
import { LuGripVertical } from "react-icons/lu"
import ExtendPageComponents from "./ExtendPageComponents"
import { useAppContext } from "../AppContext"
import { componentType } from "../../types"

const ExtendPage = ({ id, value, index, ...otherProps }) => {
  const [chevronState, setChevronState] = useState(true)
  const control = useDragControls()
  const pageNumber = value.id
  const {
    reducer: { mainState, dispatch },
    toolbox: { handlePosition, toolboxSelection, setToolboxSelection }
  } = useAppContext()
  const element = useRef(null)
  const handleClick = () => {
    handlePosition(
      {
        index,
        id: value.id,
        component: componentType.PAGE,
        pageIndex: index
      },
      element.current
    )
  }
  const handleDelete = (e) => {
    e.stopPropagation()

    if (!mainState.pages[toolboxSelection.pageIndex]) {
      setToolboxSelection({
        index: 0,
        id: mainState.pages[0].id,
        component: componentType.PAGE,
        pageIndex: 0
      })
    }

    dispatch({
      type: "removePage",
      payload: { index }
    })
  }

  return (
    <Reorder.Item
      id={id}
      key={pageNumber}
      ref={element}
      value={value}
      dragListener={false}
      dragControls={control}
      onClick={handleClick}
      exit={{ opacity: 0, animationDuration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, animationDuration: 0.5 }}
      transition={{ duration: 0 }}>
      <motion.div
        animate={false}
        className="flex items-center justify-between h-14 bg-primary rounded-lg select-none shadow-md"
        {...otherProps}>
        <div className="flex items-center ml-8 text-maintheme font-medium text-lg">
          <LuGripVertical
            className="mr-2 cursor-move"
            size={25}
            onPointerDown={(e) => {
              e.stopPropagation()
              control.start(e)
            }}
          />
          Page {pageNumber}
        </div>
        <div className="mr-8 flex items-center text-maintheme">
          {mainState.pages.length > 1 && (
            <button className="mr-2 hover:text-active" onClick={handleDelete}>
              <FaTrashCan size={25} />
            </button>
          )}
          <motion.div
            animate={{ rotate: chevronState ? 0 : 180 }}
            className="cursor-pointer"
            onClick={() => {
              setChevronState(!chevronState)
            }}>
            <BiChevronUp size={40} />
          </motion.div>
        </div>
      </motion.div>
      {chevronState && (
        <ExtendPageComponents
          page={value}
          pageIndex={index}
          dispatch={dispatch}
        />
      )}
    </Reorder.Item>
  )
}

export default ExtendPage
