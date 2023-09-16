from game_state import GameState
import math
import random

class AiService:
    def __init__(self, game_state: GameState):
        self.game_state = game_state

    def get_next_move(self, game_state: GameState):
        print("AI considering next move, with gamestate: ")
        print(game_state)

        # # get column to drop into from minimax
        # col_to_go = self.minimax(board, 5, -math.inf, math.inf, True)

        # # after we have the column, row is trivial
        # row_to_go = get_next_open_row(col_to_go)

        # hardcoded for now
        return {
            'column': 0,
            'row': 3
        }

    # helper functions for minimax algo

    def get_valid_locations(self, state: GameState):
        '''
        returns list of columns that are valid to move (ones that aren't full)
        '''
        return []

    def score_position(self, state: GameState, player):
        '''
        return a numerical representation of the attractiveness of the board for a given player
        only used if no win or tie
        '''
        return 1
    
    def get_next_open_row(self, state: GameState, col):
        '''
        return the next available row for a given column
        '''
        return 0
    
    # methods to determine whether its a win or board is full
    def is_terminal_node(self, state: GameState):
        '''
        returns true if the game is over (win or tie)
        '''
        return False

    def is_win(self, state: GameState, player):
        '''
        returns true if the player has won
        '''
        return False
    
    def is_tie(self, state: GameState):
        '''
        returns true if board is completely full for a tie
        '''
        return False

    
    def minimax(self, board:GameState, depth, alpha, beta, maximizing_player):
        '''
        Maximizing player is true for ai, false for player
        Alpha and beta are best scores a side can achieve assuming the opponent makes the best play.

        minimax function adapted from
        github.com/zakuraevs/connect4-ai/blob/master/connect4_ai_commented.py
        '''

        # all valid locations on the board
        valid_locations = self.get_valid_locations(board)

        # boolean that tells if the current board is terminal
        is_terminal = self.is_terminal_node(board)

        # if the board is terminal or depth == 0
        # we score the win very high and a draw as 0
        if depth == 0 or is_terminal:
            if is_terminal: # winning move 
                if self.winning_move(board, AI_PIECE):
                    return (None, 10000000)
                elif self.winning_move(board, PLAYER_PIECE):
                    return (None, -10000000)
                else:
                    return (None, 0)
            # if depth is zero, we simply score the current board
            else: # depth is zero
                return (None, self.score_position(board, AI_PIECE))

        # if the current board is not rerminal and we are maximizing
        if maximizing_player:

            # initial value is what we do not want - negative infinity
            value = -math.inf

            # this will be the optimal column. Initially it is random
            column = random.choice(valid_locations)

            # for every valid column, we simulate dropping a piece with the help of a board copy
            # and run the minimax on it with decresed depth and switched player
            for col in valid_locations:
                row = self.get_next_open_row(board, col)
                b_copy = board.copy()
                self.game_state.make_move(col, idk)
                # recursive call
                new_score = self.minimax(self, b_copy, depth-1, alpha, beta, False)[1]
                # if the score for this column is better than what we already have
                if new_score > value:
                    value = new_score
                    column = col
                # alpha is the best option we have overall
                alpha = max(value, alpha) 
                # if alpha (our current move) is greater (better) than beta (opponent's best move), then 
                # the oponent will never take it and we can prune this branch
                if alpha >= beta:
                    break

            return column, value
        
        # same as above, but for the minimizing player
        else: # for thte minimizing player
            value = math.inf
            column = random.choice(valid_locations)
            for col in valid_locations:
                row = self.get_next_open_row(board, col)
                b_copy = board.copy()
                # self(b_copy, row, col, PLAYER_PIECE)
                self.game_state.make_move(col, player)
                new_score = self.minimax(b_copy, depth-1, alpha, beta, True)[1]
                if new_score < value:
                    value = new_score
                    column = col
                beta = min(value, beta) 
                if alpha >= beta:
                    break
            return column, value
