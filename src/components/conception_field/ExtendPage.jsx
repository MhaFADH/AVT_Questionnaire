import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { FaTrashCan } from "react-icons/fa6"
import { LuGripVertical } from "react-icons/lu"

const ExtendPage = ({ pageNumber, dispatch, ...otherProps }) => {
  const [chevronState, setChevronState] = useState(false)

  return (
    <div
      className="flex items-center justify-between w-full h-14 bg-primary rounded-md"
      {...otherProps}>
      <div className="flex items-center ml-8 text-white font-medium text-lg">
        <LuGripVertical className="mr-2" size={25} /> Page {pageNumber}
      </div>
      <div className="mr-8 flex items-center text-white">
        <button
          className="mr-2"
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
  )
}

export default ExtendPage
