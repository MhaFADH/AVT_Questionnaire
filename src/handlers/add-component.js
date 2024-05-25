import { componentType } from "../types"

export default (
  state,
  { toolboxSelection: { index, id, component, pageIndex }, componentToAdd }
) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (componentToAdd === componentType.PAGE) {
    newState.pageCounter += 1
    const page = {
      id: newState.pageCounter,
      fields: [],
      fieldsCounter: 0
    }
    page.id = newState.pageCounter
    newState.pages.splice(index + 1, 0, page)

    return newState
  }

  let field = {}

  newState.pages[pageIndex].fieldsCounter += 1

  switch (componentToAdd) {
    case componentType.TEXT:
      field = {
        id: newState.pages[pageIndex].fieldsCounter,
        type: "text",
        label: "Text Field",
        question: "Question",
        description: "Description"
      }
  }

  newState.pages[pageIndex].fields.splice(index + 1, 0, field)

  return newState
}
