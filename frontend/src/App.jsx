import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './components/Home.jsx';
import PlayerPage from "./components/PlayerPage.jsx";
import BotPage from "./components/BotPage.jsx";
import AnalyzerPage from "./components/AnalyzerPage.jsx";

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/player-v-player" element={<PlayerPage/>}></Route>
        <Route path="/player-v-bot" element={<BotPage/>}></Route>
        <Route path="/analyzer" element={<AnalyzerPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
