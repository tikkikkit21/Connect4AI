import {NavLink} from "react-router-dom";
import Header from './Header.jsx'

function Home() {
    return (
        <main className="main-menu"> 
            <Header />
            <h1> Connect4 AI </h1>
            <div className="menu-button-container">
                <NavLink style = {{ textDecoration: "none"}} to={"/player-v-player"}>
                    <div className="circle-class outer-button one">
                        <div className="circle-class button-container">
                            <div>
                                <h3>Player vs. Player</h3>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink style = {{ textDecoration: "none"}} to={"/player-v-bot"}>
                <div className="circle-class outer-button two">
                        <div className="circle-class button-container">
                            <div>
                                <h3>Player vs. Bot</h3>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink style = {{ textDecoration: "none"}} to={"/analyzer"}>
                <div className="circle-class outer-button one">
                        <div className="circle-class button-container">
                            <div>
                                <h3>Game Analyzer</h3>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </main>
    )
}
export default Home;