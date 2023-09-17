import Circle from './Circle.jsx';
import { useState } from 'react';

function Board() {
    // Outer array: 7 columns; inner array: 6 rows. First number: lowest position; last number: highest position
    // Hard-coded for now
    const getBoardFromBackend = () => {
        return [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
    }

    const generateStartingGrid = () => {
        let code = []
        for (let i = 5; i > -1; i--) {
            for (let j = 0; j < 7; j++) {
                code.push(<Circle value='zero' key={`${j}${i}`}/>)
            }
        }
        return code
    }

    const [board, setBoard] = useState(getBoardFromBackend())
    const [player, setPlayer] = useState(1)
    const [grid, setGrid] = useState(generateStartingGrid())

    const playerClicked = (column, player) => {
        let array = board;
        let j = 0;
        while (array[column][j] != 0) {
            j++;
        }
        array[column][j] = player
        setBoard(array)
    }

    return (
        <div className="game-grid">
            {grid}
        </div>
    )
}

export default Board;