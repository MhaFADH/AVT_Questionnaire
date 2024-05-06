import clsx from "clsx"
import React, { useState } from "react"

const FormDesigner = () => {
  const style = {
    buttonStyle:
      "hover:bg-gray-300 h-7 cursor-pointer text-center active:bg-gray-200 "
  }
  const [fields, setFields] = useState([])

  return (
    <div className="flex w-full mt-14">
      <div className="w-1/4 bg-gray-200 rounded-xl">
        <div className=" text-center rounded-t-lg bg-gray-100 border-gray-200 border-4 font-medium w-full">
          FIELDS
        </div>
        <div
          className={clsx(style.buttonStyle, "rounded-t-xl")}
          onClick={() => setFields([...fields, "Text Field"])}>
          Text Field
        </div>
        <div
          className={clsx(style.buttonStyle, "")}
          onClick={() => setFields([...fields, "Number Field"])}>
          Number Field
        </div>
        <div
          className={clsx(style.buttonStyle, "rounded-b-xl")}
          onClick={() => setFields([...fields, "Select Field"])}>
          Select Field
        </div>
      </div>
      <div className="w-full bg-gray-200 mx-10 rounded-lg">
        <div className=" text-center rounded-t-lg bg-gray-100 border-gray-200 border-4 font-medium">
          FORMULAR DESIGNER
        </div>
        {fields.map((field, index) => (
          <div key={index}>
            <div>{field}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormDesigner
