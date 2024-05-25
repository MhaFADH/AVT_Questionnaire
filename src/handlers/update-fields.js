export default (state, { newFields, pageIndex }) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.pages[pageIndex].fields = newFields

  return newState
}
