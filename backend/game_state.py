import numpy as np

ROWS = 6
COLS = 7

PLAYER_PIECE = 1
AI_PIECE = 2


class GameState:
    def __init__(self, custom_board=None):
        if custom_board:
            # Use the custom board if provided
            self.board = np.array(custom_board)
        else:
            # Initialize a 7x6 board with empty slots (0 represents an empty slot)
            self.board = np.zeros((COLS, ROWS), dtype=int)

    def __str__(self):
        # Create a string representation of the board
        trans = np.flipud(np.transpose(self.board, axes=(1, 0)))
        board_str = ""
        for row in trans:
            board_str += " ".join(map(str, row)) + "\n"
        return board_str

    def make_move(self, column, player):
        # Check if the column is valid and the selected slot is empty
        if 0 <= column < COLS and self.board[column][ROWS-1] == 0:
            # Find the lowest empty slot in the column and place the player's piece (1 or 2)
            for row in range(ROWS):
                if self.board[column][row] == 0:
                    self.board[column][row] = player
                    return True  # Move successfully made
        return False  # Invalid move

    def is_full(self):
        # Check if the board is completely filled (a tie)
        for top_of_col in self.board[:, ROWS-1]:
            if top_of_col == 0:
                return False  # There's an empty slot
        return True  # The board is full (tie game)

    def check_win_condition(self, piece: int):
        """
        checks win condition for player

        Args:
        piece: This should be 1 for the players peice, or 2 for the AI's.
        """
        # check horizontal
        for c in range(COLS-3):
            for r in range(ROWS):
                if self.board[c][r] == piece and self.board[c+1][r] == piece and self.board[c+2][r] == piece and self.board[c+3][r] == piece:
                    return True

        # check vertical
        for c in range(COLS):
            for r in range(ROWS-3):
                if self.board[c][r] == piece and self.board[c][r+1] == piece and self.board[c][r+2] == piece and self.board[c][r+3] == piece:
                    return True

        # check upward diagonals
        for c in range(COLS-3):
            for r in range(3, ROWS):
                if self.board[c][r] == piece and self.board[c+1][r-1] == piece and self.board[c+2][r-2] == piece and self.board[c+3][r-3] == piece:
                    return True

        # check downward diagonals
        for c in range(3, COLS):
            for r in range(3, ROWS):
                if self.board[c][r] == piece and self.board[c-1][r-1] == piece and self.board[c-2][r-2] == piece and self.board[c-3][r-3] == piece:
                    return True

        # no win
        return False

    def get_landing_row(self, col: int):
        """
        Given a column, determines where the peice lands, or -1 if full.
        Returns the row.
        """
        if col < 0 or col > COLS:
            raise ValueError("Invalid column")
        column = self.board[col]
        for r in range(ROWS):
            if column[r] == 0:
                return r
        return -1
