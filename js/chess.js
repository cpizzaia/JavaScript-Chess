document.addEventListener("DOMContentLoaded", function() {
  Chess.newGame();
});

window.Chess = window.Chess || {
  newGame: function() {
    this.startPos = null;
    this.endPos = null;
    this.board = new this.Board();
    this.display = new this.Display(this.board);
  },

  selectPosition: function(array) {
    if (this.startPos === null && this.board.getPiece(array) !== null) {
      this.startPos = array;
    } else if (this._arrayEquals(this.startPos, array)) {
      this.startPos = null;
    } else if (this.startPos !== null) {
      this.endPos = array;
      this.move(this.startPos, this.endPos);
    }
    this.display.render();
  },

  move: function() {
    this.board.move(this.startPos, this.endPos);
    this.startPos = null;
    this.endPos = null;
  },

  _arrayEquals: function(array1, array2) {
    for (var i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }
};
