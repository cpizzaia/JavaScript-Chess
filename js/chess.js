document.addEventListener("DOMContentLoaded", function() {
  Chess.newGame();
});

window.Chess = window.Chess || {
  newGame: function() {
    this.startPos = null;
    this.endPos = null;
    this.board = new this.Board();
    this.display = new this.Display(this.board);
    this.bKing = this.board.grid[0][4];
    this.wKing = this.board.grid[7][4];
  },

  selectPosition: function(array) {
    var piece = this.board.getPiece(array);
    if (this.startPos === null && piece !== null) {
      this.startPos = array;
      piece.availableMoves();
    } else if (this.Util._arrayEquals(this.startPos, array)) {
      this.startPos = null;
      this.moves = [];
      piece = null;
    } else if (this.startPos !== null) {
      this.endPos = array;
      this.move(this.startPos, this.endPos);
      piece = null;
    }
    this.display.render(piece);
  },

  move: function() {
    this.board.move(this.startPos, this.endPos);
    this.startPos = null;
    this.endPos = null;
  },
};
