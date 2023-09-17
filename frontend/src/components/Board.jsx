import Circle from './Circle.jsx';
import { useState, useEffect } from 'react';

function Board() {
    // Outer array: 7 columns; inner array: 6 rows. First number: lowest position; last number: highest position
    // Hard-coded for now
    const getBoardFromBackend = () => {
        const BACKEND_ADDR = "http://127.0.0.1:5000";
        const url = BACKEND_ADDR + "/getnextboard"
        
        // TODO: need to get current board instead of blank
        const currBoard = 
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]]
        const data = {'board': currBoard}
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        let new_board = []
        console.log("Sent request to backend for move and new board")
        fetch(url, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            new_board = data
            console.log("Recieved move and new board from backend: ", new_board)
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
        return new_board;
    }

    const [board, setBoard] = useState(getBoardFromBackend())
    // Actual turns start at 1
    const [turn, setTurn] = useState(0)
    
    useEffect(() => {
        console.log(turn);
        // You can perform actions that depend on the updated 'turn' here.
      }, [turn]);

    const updateBoard = (column) => {
        console.log("updating board")
        let array = board;
        let j = 0;
        while (array[column][j] != 0) {
            j++;
        }
        array[column][j] = 1
        setBoard(array);
        setTurn(turn => turn + 1)
        updateGrid(column, j, turn);
    }

    const generateStartingGrid = () => {
        let code = []
        for (let i = 5; i > -1; i--) {
            for (let j = 0; j < 7; j++) {
                code.push(<Circle value='zero' column={j} keyProps={`${j}${i}`} handleClick={updateBoard} key={`${j}${i}`}/>)
            }
        }
        return code
    }

    const [grid, setGrid] = useState(generateStartingGrid())

    const updateGrid = (column, row, turn) => {
        let array = grid;
        let i = 0;
        let key = `${column}${row}`;
        while (!(array[i].props.keyProps === key)) {
            i++;
        }
        if (turn % 2 === 0) {
            array[i] = <Circle value="one" column={column} keyProps={`${column}${row}`} handleClick={updateBoard} key={`${column}${row}`}/>
        }
        else {
            array[i] = <Circle value="two" column={column} keyProps={`${column}${row}`} handleClick={updateBoard} key={`${column}${row}`}/>
        }
        setGrid(array);
    }

    return (
        <div className="game-grid">
            {grid}
        </div>
    )
}

export default Board;