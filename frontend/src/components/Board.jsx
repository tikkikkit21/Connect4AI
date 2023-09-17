import Circle from './Circle.jsx';
import { useState, useEffect } from 'react';
import * as React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.getBoardFromBackend = this.getBoardFromBackend.bind(this);
        this.getInitialBoard = this.getInitialBoard.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.generateStartingGrid = this.generateStartingGrid.bind(this);
        this.state = {
            board: this.getInitialBoard(),
            grid: this.generateStartingGrid(),
            turn: 0, // 0 when player 1 is playing, 1 when player 2 is playing
        }
        this.gameMode = this.props.gameMode
    }

    // get an empty board
    getInitialBoard() {
        return [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
    }

    // Outer array: 7 columns; inner array: 6 rows. First number: lowest position; last number: highest position
    async getBoardFromBackend(currBoard) {
        const BACKEND_ADDR = "http://127.0.0.1:5000";
        const url = BACKEND_ADDR + "/getnextboard"
        
        // TODO: need to get current board instead of blank
        const data = {'board': currBoard}
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        let new_board = []

        // send board to backend
        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const res_data = await response.json();
        new_board = res_data;
        return new_board;
    }

    async updateBoard(column) {
        let i = -1;
        let updated = false;
        const nextBoard = this.state.board.map((currCol) => {
            i++;
            return currCol.map((cell) => {
                if (i === column && cell == 0 && !updated) {
                    updated = true;
                    return this.state.turn + 1;
                }
                else {
                    return cell;
                }
            })
        })

        // update the state from the players turn
        await this.setState(prevState => ({
            board: nextBoard,
            turn: (prevState.turn + 1) % 2
        }))

        // ask the AI for its turn
        if (this.gameMode === "pve") {
            const aiBoard = await this.getBoardFromBackend(nextBoard)
            let nextState = {
                board: aiBoard,
                turn: (this.state.turn + 1) % 2
            }
            this.setState(nextState, () => {});
        }
    }

    generateStartingGrid() {
        let code = []
        for (let i = 5; i > -1; i--) {
            for (let j = 0; j < 7; j++) {
                code.push(<Circle value='zero' column={j} keyProps={`${j}${i}`} handleClick={this.updateBoard} key={`${j}${i}`}/>)
            }
        }
        return code
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.board != prevState.board && this.state.turn != prevState.turn) {
            let actionColumn = 0;
            let actionRow = 0;
            // Find the column and the row of the updated value by finding the different index between previous board and current board
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 6; j++) {
                    if (this.state.board[i][j] !== prevState.board[i][j]) {
                        actionColumn = i;
                        actionRow = j;
                    }
                }
            }
            let array = this.state.grid;
            let i = 0;
            let key = `${actionColumn}${actionRow}`;
            while (!(array[i].props.keyProps === key)) {
                i++;
            }
            if (this.state.turn % 2 === 0) {
                array[i] = <Circle value="one" column={actionColumn} keyProps={`${actionColumn}${actionRow}`} handleClick={this.updateBoard} key={`${actionColumn}${actionRow}`}/>
            }
            else {
                array[i] = <Circle value="two" column={actionColumn} keyProps={`${actionColumn}${actionRow}`} handleClick={this.updateBoard} key={`${actionColumn}${actionRow}`}/>
            }
            this.setState(prevState => ({
                grid: array
            }))
        }
        
    }

    // const updateGrid = (column, row, turn) => {
    //     let array = grid;
    //     let i = 0;
    //     let key = `${column}${row}`;
    //     while (!(array[i].props.keyProps === key)) {
    //         i++;
    //     }
    //     if (turn % 2 === 0) {
    //         array[i] = <Circle value="one" column={column} keyProps={`${column}${row}`} handleClick={updateBoard} key={`${column}${row}`}/>
    //     }
    //     else {
    //         array[i] = <Circle value="two" column={column} keyProps={`${column}${row}`} handleClick={updateBoard} key={`${column}${row}`}/>
    //     }
    //     setGrid(array);
    // }

    render() {
        return (
            <div className="game-grid">
                {this.state.grid}
            </div>
        )
    }
}

export default Board;