export default (state, { pageNumber }) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.pages = state.pages.filter((page) => page.id !== pageNumber)

  return newState
}
