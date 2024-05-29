export default (state, { fieldIndex, pageIndex }) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.pages[pageIndex].fields.splice(fieldIndex, 1)

  return newState
}
