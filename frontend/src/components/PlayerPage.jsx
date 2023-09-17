import Board from './Board.jsx';
import { useState } from 'react';
import Header from './Header.jsx'

function PlayerPage() {
    const [currPlayer, setCurrPlayer] = useState(1)
    const handleTurnChange = (turn) => {
        setCurrPlayer(turn + 1)
    }
    return (
        <div>
            <Header />
            <h1>Player vs Player</h1>
            <h2>It is Player {currPlayer}'s Turn</h2>
            <Board onTurn={handleTurnChange}/>
        </div>
    )
}
export default PlayerPage;