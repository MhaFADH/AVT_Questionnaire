import clsx from "clsx"
import colors from "../colors"
import { PiPaintBrushDuotone } from "react-icons/pi"
import { GrDocumentConfig } from "react-icons/gr"
import { IoIosPhonePortrait } from "react-icons/io"

const SideBar = ({ getter, setter, className }) => (
  <div
    className={clsx(
      "flex flex-col w-30 h-full bg-maintheme font-medium text-sm items-center shadow-xl z-10 select-none",
      className
    )}>
    <div className="flex flex-col items-center mt-10">
      <div
        className={clsx(
          "flex flex-col text-primary items-center justify-center w-full p-3 hover:bg-active hover:cursor-pointer",
          getter === "configuration" && "bg-active"
        )}
        onClick={() => setter("configuration")}>
        <GrDocumentConfig
          className="mr-2 mb-2"
          color={colors.primary}
          size={50}
        />
        Configuration
      </div>
      <div
        className={clsx(
          "flex flex-col text-primary items-center justify-center w-full p-3 hover:bg-active hover:cursor-pointer",
          getter === "conception" && "bg-active"
        )}
        onClick={() => setter("conception")}>
        <PiPaintBrushDuotone
          className=" mb-1"
          color={colors.primary}
          size={50}
        />
        Conception
      </div>
      <div
        className={clsx(
          "flex flex-col text-primary items-center justify-center w-full p-3 hover:bg-active hover:cursor-pointer",
          getter === "recapitulatif" && "bg-active"
        )}
        onClick={() => setter("recapitulatif")}>
        <IoIosPhonePortrait
          className=" mb-1"
          color={colors.primary}
          size={55}
        />
        Récapitulatif
      </div>
    </div>
  </div>
)

export default SideBar
