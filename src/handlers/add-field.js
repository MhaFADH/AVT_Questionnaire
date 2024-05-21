export default (state, { pageId, type }) => {
  const newState = JSON.parse(JSON.stringify(state))
  const index = state.pages.findIndex((page) => page.id === pageId)

  let field = {}

  switch (type) {
    case "text":
      field = {
        id: state.pages.fieldsCounter + 1,
        type: "text",
        label: "Text Field",
        question: "Question",
        description: "Description"
      }
  }

  newState.pages[index].fields.push(field)
  newState.pages[index].fieldsCounter += 1

  return newState
}
