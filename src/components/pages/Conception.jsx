import ExtendPage from "../conception_field/ExtendPage"
import { useAppContext } from "../AppContext"

const Conception = () => {
  const {
    reducer: {
      mainState: { pages },
      dispatch
    }
  } = useAppContext()

  return (
    <div className="flex">
      <div className="flex flex-col w-2/3 space-y-4">
        <button onClick={() => dispatch({ type: "addPage" })}>ADD</button>
        {pages.map((page, index) => (
          <ExtendPage key={index} pageNumber={page} dispatch={dispatch} />
        ))}
      </div>
      <div className="mx-7 rounded-md w-1/3 bg-primary">Device spot</div>
    </div>
  )
}

export default Conception
