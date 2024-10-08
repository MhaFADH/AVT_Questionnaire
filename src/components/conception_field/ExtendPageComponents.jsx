import { Reorder } from "framer-motion"
import { useAppContext } from "../AppContext"
import ExtendFieldTemplate from "./ExtendFieldTemplate"

const ExtendPageComponents = ({ page, pageIndex, ...otherProps }) => {
  const {
    reducer: { dispatch }
  } = useAppContext()
  const handleReorder = (newFields) =>
    dispatch({ type: "reorderFields", payload: { newFields, pageIndex } })

  return (
    <>
      <Reorder.Group
        values={page.fields}
        onReorder={handleReorder}
        className="flex flex-col items-center justify-center bg-transparent m-4 rounded-md select-none space-y-4"
        {...otherProps}>
        {page.fields.map((field, index) => (
          <ExtendFieldTemplate
            pageIndex={pageIndex}
            fieldIndex={index}
            key={field.id}
            field={field}
          />
        ))}
      </Reorder.Group>
    </>
  )
}

export default ExtendPageComponents
