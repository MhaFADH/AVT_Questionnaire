import { Reorder, useDragControls } from "framer-motion"
import { useRef, useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
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
    toolbox: { handlePosition }
  } = useAppContext()
  const element = useRef(null)

  return (
    <Reorder.Item
      id={id}
      key={pageNumber}
      ref={element}
      value={value}
      dragListener={false}
      dragControls={control}
      transition={{
        duration: 0
      }}
      onClick={() =>
        handlePosition(
          {
            index,
            id: value.id,
            component: componentType.PAGE,
            pageIndex: index
          },
          element.current
        )
      }>
      <div
        className="flex items-center justify-between h-14 bg-primary rounded-lg select-none shadow-md"
        {...otherProps}>
        <div className="flex items-center ml-8 text-maintheme font-medium text-lg">
          <LuGripVertical
            className="mr-2 cursor-move"
            size={25}
            onPointerDown={(e) => control.start(e)}
          />
          Page {pageNumber}
        </div>
        <div className="mr-8 flex items-center text-maintheme">
          {mainState.pages.length > 1 && (
            <button
              className="mr-2 hover:text-active"
              onClick={() =>
                dispatch({ type: "removePage", payload: { index } })
              }>
              <FaTrashCan size={25} />
            </button>
          )}
          <button onClick={() => setChevronState(!chevronState)}>
            {chevronState ? (
              <BiChevronUp size={40} />
            ) : (
              <BiChevronDown size={40} />
            )}
          </button>
        </div>
      </div>
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
