export default (state, { fieldIndex, pageIndex, field: { name, value } }) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.pages[pageIndex].fields[fieldIndex][name] = value

  return newState
}
