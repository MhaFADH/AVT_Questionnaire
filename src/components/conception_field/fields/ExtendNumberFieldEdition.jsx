import DefaultOptions from "../DefaultOptions"

const ExtendNumberFieldEdition = ({
  fieldProperties,
  fieldIndex,
  pageIndex
}) => {
  const colProperties = "w-7/12 m-2 flex flex-col items-center space-y-4 p-2"

  return (
    <div className="w-full h-full rounded-b-xl flex flex-row justify-evenly">
      <div className={colProperties}></div>
      <div className={colProperties}>
        <DefaultOptions pageIndex={pageIndex} fieldIndex={fieldIndex} />
      </div>
    </div>
  )
}

export default ExtendNumberFieldEdition
