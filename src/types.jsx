import ExtendDateField from "./components/conception_field/fields/ExtendDateField"
import ExtendNumberField from "./components/conception_field/fields/ExtendNumberField"
import ExtendTextField from "./components/conception_field/fields/ExtendTextField"

export const componentType = {
  TEXT: "text",
  PAGE: "page",
  NUMBER: "number",
  DATE: "date"
}

export const fields = {
  [componentType.TEXT]: (fieldProperties, fieldIndex, pageIndex) => (
    <ExtendTextField
      fieldProperties={fieldProperties}
      fieldIndex={fieldIndex}
      pageIndex={pageIndex}
    />
  ),
  [componentType.NUMBER]: (fieldProperties, fieldIndex, pageIndex) => (
    <ExtendNumberField
      fieldProperties={fieldProperties}
      fieldIndex={fieldIndex}
      pageIndex={pageIndex}
    />
  ),
  [componentType.DATE]: (fieldProperties, fieldIndex, pageIndex) => (
    <ExtendDateField
      fieldProperties={fieldProperties}
      fieldIndex={fieldIndex}
      pageIndex={pageIndex}
    />
  )
}
