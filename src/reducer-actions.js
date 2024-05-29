import addComponent from "./handlers/add-component"
import conditionnalRules from "./handlers/conditionnal-rules"
import copyField from "./handlers/copy-field"
import editField from "./handlers/edit-field"
import handleMandatory from "./handlers/handle-mandatory"
import removeField from "./handlers/remove-field"
import removePage from "./handlers/remove-page"
import save from "./handlers/save"
import showOnline from "./handlers/show-online"
import tools from "./handlers/tools"
import updateFields from "./handlers/update-fields"
import updatePages from "./handlers/update-pages"

export default {
  save: (state) => save(state),
  tools: (state) => tools(state),
  showOnline: (state) => showOnline(state),
  conditionnalRules: (state) => conditionnalRules(state),
  removePage: (state, payload) => removePage(state, payload),
  setNewPagesArray: (state, payload) => updatePages(state, payload),
  addComponent: (state, payload) => addComponent(state, payload),
  reorderFields: (state, payload) => updateFields(state, payload),
  removeField: (state, payload) => removeField(state, payload),
  setMandatory: (state, payload) => handleMandatory(state, payload),
  editField: (state, payload) => editField(state, payload),
  copyField: (state, payload) => copyField(state, payload)
}
