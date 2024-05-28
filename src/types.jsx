import {
  FaAlignCenter,
  FaArrowUp19,
  FaCalendarPlus,
  FaFileCirclePlus
} from "react-icons/fa6"
import ExtendDateFieldEdition from "./components/conception_field/fields/ExtendDateFieldEdition"
import ExtendNumberFieldEdition from "./components/conception_field/fields/ExtendNumberFieldEdition"
import ExtendTextFieldEdition from "./components/conception_field/fields/ExtendTextFieldEdition"

export const componentType = {
  TEXT: "text",
  PAGE: "page",
  NUMBER: "number",
  DATE: "date"
}

export const typeIcons = {
  [componentType.TEXT]: <FaAlignCenter size={25} />,
  [componentType.NUMBER]: <FaArrowUp19 size={25} />,
  [componentType.DATE]: <FaCalendarPlus size={25} />,
  [componentType.PAGE]: <FaFileCirclePlus size={25} />
}

export const fields = {
  [componentType.TEXT]: (fieldProperties, fieldIndex, pageIndex) => (
    <ExtendTextFieldEdition
      fieldProperties={fieldProperties}
      fieldIndex={fieldIndex}
      pageIndex={pageIndex}
    />
  ),
  [componentType.NUMBER]: (fieldProperties, fieldIndex, pageIndex) => (
    <ExtendNumberFieldEdition
      fieldProperties={fieldProperties}
      fieldIndex={fieldIndex}
      pageIndex={pageIndex}
    />
  ),
  [componentType.DATE]: (fieldProperties, fieldIndex, pageIndex) => (
    <ExtendDateFieldEdition
      fieldProperties={fieldProperties}
      fieldIndex={fieldIndex}
      pageIndex={pageIndex}
    />
  )
}
