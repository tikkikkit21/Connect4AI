import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from './Header.jsx'

function addDrop(elem) {
    var buttons = document.getElementsByClassName("circle-class");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('dropped');
    }
    elem.classList.add('dropped')
}

async function handleClick(elem) {
    console.log("BOOO")
    addDrop(elem)
    const promise = delay(800);
    promise.then(()=>{console.log("GAY")})
}

function Home() {

    const navigate = useNavigate();

    const [isActive, setActive] = useState(0);

    const toggleDrop = (number) => {
        setActive(number);
    };  

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const delayNav = async (link) => {
        const promise = delay(600);
        promise.then(()=>{navigate(link)})
    };

    return (
        <main className="main-menu"> 
            <h1> Connect4 AI </h1>
            <div className="menu-button-container">
                <NavLink style = {{ textDecoration: "none"}} onClick={()=>{toggleDrop(1);delayNav("/player-v-player");}}>
                    <div className={isActive == 1 ? "circle-class outer-button one dropped" : "circle-class outer-button outer-button-hover one"}>
                        <div className="circle-class button-container">
                            <div>
                                <h3>Player vs. Player</h3>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink style = {{ textDecoration: "none"}} onClick={()=>{toggleDrop(2);delayNav("/player-v-bot");}}>
                    <div className={isActive == 2 ? "circle-class outer-button two dropped" : "circle-class outer-button outer-button-hover two"}>
                        <div className="circle-class button-container">
                            <div>
                                <h3>Player vs. Bot</h3>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink style = {{ textDecoration: "none"}} onClick={()=>{toggleDrop(3);delayNav("/analyzer");}}>
                    <div className={isActive == 3 ? "circle-class outer-button one dropped" : "circle-class outer-button outer-button-hover one"}>
                        <div className="circle-class button-container">
                            <div>
                                <h3>Game Analyzer</h3>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="fake-board">
                <div className="circle-class fake-hole"></div>
                <div className="circle-class fake-hole"></div>
                <div className="circle-class fake-hole"></div>
            </div>
        </main>
    )
}
export default Home;
