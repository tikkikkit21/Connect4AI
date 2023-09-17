from flask import Flask, request, jsonify
from flask_cors import CORS

from ai_service import AiService
from game_state import GameState

app = Flask(__name__)
CORS(app)

@app.route('/')  # TODO: Emphasize this endpoint. It's spitting
def who_is_different():
    return 'Eugene is different'


@app.route('/hello')  # TODO: Remove
def hello_world():
    return 'hello_world'


@app.route('/firstmove')  # TODO: Remove
# first move will always be the same, but will remove this
def get_first_move():
    return {
        'column': 0,
        'row': 3
    }


# SEE readme for example http post to hit this
@app.route('/getnextmove', methods=['POST'])
# receive in the game state, send AI's next move
def get_next_move():
    data = request.get_json()  # body of POST
    board = data['board']
    game_state = GameState(custom_board=board)

    ai_service = AiService()

    return ai_service.get_next_move(game_state=game_state)

# This one is the same as /getnextmove except it returns a table instead of a location
@app.route('/getnextboard', methods=['POST']) 
def get_next_board():                                
    data = request.get_json()
    board = data['board']
    game_state = GameState(custom_board=board)
    ai_service = AiService()

    # get the next move from ai service
    next_move = ai_service.get_next_move(game_state=game_state)
    row = next_move["row"]
    column = next_move["column"]

    # edit the array, then send it back
    board[column][row] = 2
    return jsonify(board)

if __name__ == '__main__':
    # Run the application on a local development server
    app.run(debug=True)
