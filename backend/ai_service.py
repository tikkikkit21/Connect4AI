from game_state import GameState


def get_next_move(game_state: GameState):

    print("AI considering next move, with gamestate: ")
    print(game_state)

    # hardcoded for now
    return {
        'column': 0,
        'row': 3
    }
