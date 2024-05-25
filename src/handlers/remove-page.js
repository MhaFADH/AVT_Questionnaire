export default (state, { index }) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.pages.splice(index, 1)

  return newState
}
