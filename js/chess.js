document.addEventListener("DOMContentLoaded", function() {
  Chess.newGame();
});

window.Chess = window.Chess || {
  newGame: function() {
    this.board = new this.Board();
    this.display = new this.Display(this.board);
  }
};
