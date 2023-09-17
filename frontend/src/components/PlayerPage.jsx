import Board from './Board.jsx';
import { useState } from 'react';
import Header from './Header.jsx'

function PlayerPage() {
    const [currPlayer, setCurrPlayer] = useState(1)
    const handleTurnChange = (turn) => {
        setCurrPlayer(turn + 1)
    }
    return (
        <div class="page-center-container">
            <Header />
            <h1>Player vs Player</h1>
            <h2>It is Player {currPlayer}'s Turn</h2>
            <Board gameMode={"pvp"} onTurn={handleTurnChange}/>
        </div>
    )
}
export default PlayerPage;