# Connect4AI
Test your connect4 skills against a minimax AI

# How to run
- open a terminal and run `python backend/app.py`
- open another terminal and run `cd frontend && npm run dev`
- open `http://localhost:5173/` in your browwser

## Inspiration
Other classic games have lots of tools you can use to help you improve. For example, chess has a bot called stockfish, that you can play against, use to help analyze your games, and get the best move in any position from. Connect 4 lacks a lot of these tools, so we decided to create some, to help us get better at Connect 4.

## What it does
Our web application initially was going to support 3 game modes: Player vs Player, Player vs AI, and Game Analyzer, however we didn't end up implementing Game Analyzer yet. The main functionality of the application is to allow a user to play against the AI. The user makes a move, then the board is sent to the backend where the AI determines it's best possible move. Then it responds with its move and the user sees it. This repeats until the end of the game.

## How we built it
For the backend, we used Python and Flask to develop the AI logic and the API endpoint for it respectively. Since AI algorithms for Connect4 are common knowledge, we based our AI on a minimax algorithm. For the frontend, we used React and Javascript in order to implement the playing board itself. The player vs player game mode is completely in the front end, while the player vs AI game mode sends a POST request to the Flask backend to send and receive board states.

## Challenges we ran into
The main challenge we ran into was building the frontend. We built the frontend in React, and we initially didn't plan for it to be the bottleneck of the project. However, building a UI for a connect 4 web application is actually complicated, so we ended up spending lot's of time on it.

## Accomplishments that we're proud of
The UI we created in react is an accomplishment on its own, especially for us who were newer to react. Another accomplishment is a working, quick AI that we couldn't even beat ourselves. Finally, as a team, being able to integrate everything together to have a working application in a short amount of time is something to be proud of.

## What we learned
Flask is completely new to us, so that was something we had to learn from scratch. We also had very frantic Github usage near the end of the last day, so each of us learned a little more about Github. Utilizing hooks in React in order to make a the game board work was a big thing that we to overcome.

## What's next for Connect4 AI
Our next steps for this application definitely revolve around the game analyzer. We believe this will be an amazing feature, giving users an analysis of every possible position, and the best moves they could make in those positions.