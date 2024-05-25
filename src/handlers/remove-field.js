export default (state, { index, pageIndex }) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.pages[pageIndex].fields.splice(index, 1)

  return newState
}
