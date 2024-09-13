export default (state, { pageIndex, fieldIndex, type }) => {
  const newState = JSON.parse(JSON.stringify(state))
  const base = newState.pages[pageIndex].fields[fieldIndex][type]

  console.log("base", base)
  newState.pages[pageIndex].fields[fieldIndex][type] =
    !state.pages[pageIndex].fields[fieldIndex][type]

  if (type === "com" && !base === false) {
    newState.pages[pageIndex].fields[fieldIndex].comMandatory = false
  }

  return newState
}
