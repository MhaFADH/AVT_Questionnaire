import { Reorder, useDragControls } from "framer-motion"
import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { FaTrashCan } from "react-icons/fa6"
import { LuGripVertical } from "react-icons/lu"

const ExtendPage = ({ pageNumber, dispatch, ...otherProps }) => {
  const [chevronState, setChevronState] = useState(false)
  const control = useDragControls()

  return (
    <Reorder.Item
      key={pageNumber}
      value={pageNumber}
      dragListener={false}
      dragControls={control}>
      <div
        className="flex items-center justify-between h-14 bg-primary rounded-md select-none"
        {...otherProps}>
        <div className="flex items-center ml-8 text-maintheme font-medium text-lg">
          <LuGripVertical
            className="mr-2 cursor-grab active:cursor-grabbing"
            size={25}
            onPointerDown={(e) => control.start(e)}
          />
          Page {pageNumber}
        </div>
        <div className="mr-8 flex items-center text-maintheme">
          <button
            className="mr-2 hover:text-active"
            onClick={() =>
              dispatch({ type: "removePage", payload: { pageNumber } })
            }>
            <FaTrashCan size={25} />
          </button>
          <button onClick={() => setChevronState(!chevronState)}>
            {chevronState ? (
              <BiChevronUp size={40} />
            ) : (
              <BiChevronDown size={40} />
            )}
          </button>
        </div>
      </div>
    </Reorder.Item>
  )
}

export default ExtendPage
