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
      fields: [
        {
          id: 1,
          type: componentType.TEXT,
          label: "Text Field",
          question: "Question",
          description: "Description"
        }
      ],
      fieldsCounter: 1
    }
    page.id = newState.pageCounter
    newState.pages.splice(pageIndex + 1, 0, page)

    return newState
  }

  let field = {}

  newState.pages[pageIndex].fieldsCounter += 1

  switch (componentToAdd) {
    case componentType.TEXT:
      field = {
        id: newState.pages[pageIndex].fieldsCounter,
        type: componentType.TEXT,
        label: "Text Field",
        question: "Question",
        description: "Description"
      }

      break

    case componentType.NUMBER:
      field = {
        id: newState.pages[pageIndex].fieldsCounter,
        type: componentType.NUMBER,
        label: "Number Field"
      }

      break

    case componentType.DATE:
      field = {
        id: newState.pages[pageIndex].fieldsCounter,
        type: componentType.DATE,
        label: "Date Field"
      }

      break
  }

  if (component === componentType.PAGE) {
    newState.pages[pageIndex].fields.splice(0, 0, field)

    return newState
  }

  newState.pages[pageIndex].fields.splice(index + 1, 0, field)

  return newState
}
