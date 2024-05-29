export default (state, { fieldIndex, pageIndex }) => {
  const newState = JSON.parse(JSON.stringify(state))
  const newField = JSON.parse(
    JSON.stringify(newState.pages[pageIndex].fields[fieldIndex])
  )

  newState.pages[pageIndex].fieldsCounter += 1
  newField.id = newState.pages[pageIndex].fieldsCounter
  newState.pages[pageIndex].fields.splice(fieldIndex + 1, 0, newField)

  return newState
}
