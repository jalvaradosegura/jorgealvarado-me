import "./App.css";
import BioContainer from "./components/BioContainer";
import DarkModeToggle from "./components/DarkModeToggle";
import DetailsContainer from "./components/DetailsContainer";
import TopBanner from "./components/TopBanner";


function App() {
  return (
    <div>
      <TopBanner></TopBanner>
      <DarkModeToggle></DarkModeToggle>
      <BioContainer></BioContainer>
      <DetailsContainer></DetailsContainer>
    </div>
  );
}

export default App;
