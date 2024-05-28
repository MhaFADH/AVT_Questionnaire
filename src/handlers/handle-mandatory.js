export default (state, { pageIndex, fieldIndex }) => {
  const newState = JSON.parse(JSON.stringify(state))

  newState.pages[pageIndex].fields[fieldIndex].mandatory =
    !state.pages[pageIndex].fields[fieldIndex].mandatory

  return newState
}
