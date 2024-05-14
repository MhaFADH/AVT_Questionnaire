import { useState } from "react"
import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar"
import { useAppContext } from "./components/AppContext"
import Conception from "./components/pages/Conception"
import Configuration from "./components/pages/Configuration"
import Recapitulatif from "./components/pages/Recapitulatif"

function App() {
  const [component, setComponent] = useState("configuration")
  const {
    reducer: { mainState }
  } = useAppContext()

  return (
    <div className="bg-secondary h-screen">
      <div className="flex h-screen">
        <SideBar
          className=" bg-white"
          getter={component}
          setter={setComponent}
        />
        <div className="flex flex-col w-full h-screen bg-secondary">
          <TopBar className="bg-white" />
          <div className="bg-transparent rounded-xl h-screen w-100% mt-7 ml-7 mb-7">
            {component === "conception" && <Conception />}
            {component === "configuration" && <Configuration />}
            {component === "recapitulatif" && <Recapitulatif />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
