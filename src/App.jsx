import { useState } from "react"
import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar"
import Conception from "./components/pages/Conception"
import Configuration from "./components/pages/Configuration"
import Recapitulatif from "./components/pages/Recapitulatif"

function App() {
  const [component, setComponent] = useState("configuration")

  return (
    <div className="bg-secondary max-h-vh">
      <div className="flex h-dvh">
        <SideBar
          className=" bg-white"
          getter={component}
          setter={setComponent}
        />
        <div className="flex flex-col w-full bg-secondary">
          <TopBar className="bg-white" />
          <div className="bg-transparent rounded-xl max-h-dvh h-screen overflow-auto w-100% mt-7 mb-7 ml-7 mr-1">
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
