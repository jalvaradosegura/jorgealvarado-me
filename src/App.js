import "./App.css";
import { useState } from "react";
import BioContainer from "./components/BioContainer";
import DarkModeToggle from "./components/DarkModeToggle";
import DetailsContainer from "./components/DetailsContainer";
import TopBanner from "./components/TopBanner";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const swapTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "dark" : "else"}>
      <div className="bg-white dark:bg-gray-700 min-h-screen">
        <TopBanner></TopBanner>
        <DarkModeToggle darkMode={swapTheme}></DarkModeToggle>
        <BioContainer></BioContainer>
        <DetailsContainer></DetailsContainer>
      </div>
    </div>
  );
}

export default App;
