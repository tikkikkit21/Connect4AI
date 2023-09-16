class GameState:
    def __init__(self, custom_board=None):
        if custom_board:
            # Use the custom board if provided
            self.board = custom_board
        else:
            # Initialize a 7x5 board with empty slots (0 represents an empty slot)
            self.board = [[0] * 7 for _ in range(5)]

    def __str__(self):
        # Create a string representation of the board
        board_str = ""
        for row in self.board:
            board_str += " ".join(map(str, row)) + "\n"
        return board_str

    def make_move(self, column, player):
        # Check if the column is valid and the selected slot is empty
        if 0 <= column < 7 and self.board[0][column] == 0:
            # Find the lowest empty slot in the column and place the player's piece (1 or 2)
            for row in range(4, -1, -1):
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

    def check_winner(self, player):
        # Check for a winning condition in rows, columns, and diagonals
        for row in range(5):
            for col in range(7):
                if self.board[row][col] == player:
                    # Check horizontal
                    if col + 3 < 7 and all(self.board[row][col + i] == player for i in range(4)):
                        return True
                    # Check vertical
                    if row + 3 < 5 and all(self.board[row + i][col] == player for i in range(4)):
                        return True
                    # Check diagonal (up-right)
                    if col + 3 < 7 and row - 3 >= 0 and all(self.board[row - i][col + i] == player for i in range(4)):
                        return True
                    # Check diagonal (down-right)
                    if col + 3 < 7 and row + 3 < 5 and all(self.board[row + i][col + i] == player for i in range(4)):
                        return True
        return False  # No winner
