export default (state, { pageIndex, fieldIndex, field }) => {
  const newState = JSON.parse(JSON.stringify(state))
  const base = newState.pages[pageIndex].fields[fieldIndex][field]
  newState.pages[pageIndex].fields[fieldIndex][field] =
    !state.pages[pageIndex].fields[fieldIndex][field]

  if (field === "com" && !base === false) {
    newState.pages[pageIndex].fields[fieldIndex].comMandatory = false
  }

  return newState
}
