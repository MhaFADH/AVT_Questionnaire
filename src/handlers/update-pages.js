export default (state, { newPages }) => {
  console.log(newPages)
  const newState = JSON.parse(JSON.stringify(state))
  newState.pages = newPages

  return newState
}
