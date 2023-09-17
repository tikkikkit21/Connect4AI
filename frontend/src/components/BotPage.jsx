import Header from './Header.jsx';
import { useState } from 'react';
import Board from './Board.jsx';

function BotPage() {
    const [string, setString] = useState("It is the Player's Turn")
    const handleTurnChange = (turn) => {
        if (turn % 2 === 0) {
            setString("It is the Player's Turn");
        }
        else {
            setString("The AI is Taking its Turn...");
        }
    }
    return (
        <div>
            <Header />
            <h1>This is the bot page.</h1>
            <h2>{string}</h2>
            <Board gameMode={"pve"} onTurn={handleTurnChange}/>
        </div>
    )
}

export default BotPage;