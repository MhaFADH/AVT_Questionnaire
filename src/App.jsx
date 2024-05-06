import colors from "./colors"
import { useState } from "react"
import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar"

function App() {
  const [component, setComponent] = useState("configuration")

  return (
    <div className={`bg-[${colors.secondary}]`}>
      <div className="flex">
        <SideBar getter={component} setter={setComponent} />
        <div className="flex flex-col w-full h-screen bg-secondary">
          <TopBar />
        </div>
      </div>
    </div>
  )
}

export default App
