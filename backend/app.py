from flask import Flask, request, jsonify
from ai_service import AiService
from game_state import GameState

app = Flask(__name__)


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


if __name__ == '__main__':
    # Run the application on a local development server
    app.run(debug=True)
