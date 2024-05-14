export default (state) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.pageCounter += 1
  newState.pages.push({ id: newState.pageCounter, fields: [] })

  return newState
}
