import { useState } from "react"
import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar"
import { useAppContext } from "./components/AppContext"

function App() {
  const [component, setComponent] = useState("configuration")
  const {
    reducer: { mainState }
  } = useAppContext()

  return (
    <div className="bg-secondary">
      <div className="flex">
        <SideBar
          className=" bg-white"
          getter={component}
          setter={setComponent}
        />
        <div className="flex flex-col w-full h-screen bg-secondary">
          <TopBar className="bg-white" />
        </div>
      </div>
    </div>
  )
}

export default App
