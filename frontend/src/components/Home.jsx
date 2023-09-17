import {NavLink} from "react-router-dom";

function Home() {
    return (
        <main> 
            <h1> Connect4 AI </h1>
            <NavLink to={"/player-v-player"}>Player vs. Player</NavLink>
            <NavLink to={"/player-v-bot"}>Player vs. Bot</NavLink>
            <NavLink to={"/analyzer"}>Game Analyzer</NavLink>
        </main>
    )
}
export default Home;