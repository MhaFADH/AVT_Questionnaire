import clsx from "clsx"
import colors from "../colors"
import { PiPaintBrushDuotone } from "react-icons/pi"
import { GrDocumentConfig } from "react-icons/gr"
import { IoIosPhonePortrait } from "react-icons/io"

const SideBar = ({ getter, setter }) => (
  <div className="flex flex-col w-30 h-screen bg-white font-medium text-sm items-center shadow-xl">
    <div className="flex flex-col items-center mt-10">
      <div
        className={clsx(
          "flex flex-col text-primary items-center justify-center w-full p-3 hover:bg-slate-100 hover:cursor-pointer",
          getter === "configuration" && "bg-slate-100"
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
          "flex flex-col text-primary items-center justify-center w-full p-3 hover:bg-slate-100 hover:cursor-pointer",
          getter === "conception" && "bg-slate-100"
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
          "flex flex-col text-primary items-center justify-center w-full p-3 hover:bg-slate-100 hover:cursor-pointer",
          getter === "recapitulatif" && "bg-slate-100"
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
