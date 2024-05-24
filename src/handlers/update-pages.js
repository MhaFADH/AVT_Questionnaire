export default (state, { newPages }) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.pages = newPages

  return newState
}
