document.addEventListener("DOMContentLoaded", function() {
  Chess.newGame();
});

window.Chess = window.Chess || {
  moves: [],

  newGame: function() {
    this.startPos = null;
    this.endPos = null;
    this.board = new this.Board();
    this.display = new this.Display(this.board);
  },

  selectPosition: function(array) {
    if (this.startPos === null && this.board.getPiece(array) !== null) {
      this.startPos = array;
      this.availableMoves(this.startPos);
    } else if (this._arrayEquals(this.startPos, array)) {
      this.startPos = null;
      this.moves = [];
    } else if (this.startPos !== null) {
      this.endPos = array;
      this.move(this.startPos, this.endPos);
      this.moves = [];
    }
    this.display.render();
  },

  move: function() {
    this.board.move(this.startPos, this.endPos);
    this.startPos = null;
    this.endPos = null;
  },

  availableMoves: function(position) {
    var piece = this.board.getPiece(position);
    this.moves = [];

    for (var i = 0; i < this.board.grid.length; i++) {
      for (var j = 0; j < this.board.grid[i].length; j++) {
        if (piece.validMove(this.startPos, [i, j])) this.moves.push([i, j]);
      }
    }
  },

  _arrayEquals: function(array1, array2) {
    for (var i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }
};
