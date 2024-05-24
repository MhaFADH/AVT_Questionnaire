import { componentType } from "../types"

export default (
  state,
  { toolboxSelection: { index, id, component }, componentToAdd }
) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (componentToAdd === componentType.PAGE) {
    newState.pageCounter += 1
    const page = {
      id: newState.pageCounter,
      fields: [],
      fieldsCounter: 0
    }
    console.log(page)
    console.log(newState.pages)
    page.id = newState.pageCounter
    newState.pages.splice(index + 1, 0, page)

    return newState
  }

  return newState
}
