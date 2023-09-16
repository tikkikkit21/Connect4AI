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
            self.board = np.zeros((ROWS, COLS))

    def __str__(self):
        # Create a string representation of the board
        board_str = ""
        for row in self.board:
            board_str += " ".join(map(str, row)) + "\n"
        return board_str

    def make_move(self, column, player):
        # Check if the column is valid and the selected slot is empty
        if 0 <= column < COLS and self.board[0][column] == 0:
            # Find the lowest empty slot in the column and place the player's piece (1 or 2)
            for row in range(ROWS-1, -1, -1):
                if self.board[row][column] == 0:
                    self.board[row][column] = player
                    return True  # Move successfully made
        return False  # Invalid move

    def is_full(self):
        # Check if the board is completely filled (a tie)
        for row in self.board[0]:
            if row == 0:
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
                if self.board[r][c] == piece and self.board[r][c+1] == piece and self.board[r][c+2] == piece and self.board[r][c+3] == piece:
                    return True

        # check vertical
        for c in range(COLS):
            for r in range(ROWS-3):
                if self.board[r][c] == piece and self.board[r+1][c] == piece and self.board[r+2][c] == piece and self.board[r+3][c] == piece:
                    return True

        # check upward diagonals
        for c in range(COLS-3):
            for r in range(3, ROWS):
                if self.board[r][c] == piece and self.board[r-1][c+1] == piece and self.board[r-2][c+2] == piece and self.board[r-3][c+3] == piece:
                    return True

        # check downward diagonals
        for c in range(3,COLS):
            for r in range(3, ROWS):
                if self.board[r][c] == piece and self.board[r-1][c-1] == piece and self.board[r-2][c-2] == piece and self.board[r-3][c-3] == piece:
                    return True
        
        # no win
        return False
