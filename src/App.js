import "./App.css"
import { useState } from "react"
import BioContainer from "./components/BioContainer"
import DarkModeToggle from "./components/DarkModeToggle"
import DetailsContainer from "./components/DetailsContainer"
import Footer from "./components/Footer"
import TopBanner from "./components/TopBanner"

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const swapTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div className={isDarkTheme ? "dark" : "else"}>
      <div className="bg-white dark:bg-gray-700 min-h-screen flex flex-col">
        <div>
          <TopBanner></TopBanner>
        </div>

        <div className="flex-grow">
          <DarkModeToggle darkMode={swapTheme}></DarkModeToggle>
          <BioContainer isDarkTheme={isDarkTheme}></BioContainer>
          <DetailsContainer></DetailsContainer>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default App
