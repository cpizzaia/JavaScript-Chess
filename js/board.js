Chess.Board = function() {
  this.init();
};

Chess.Board.prototype.init = function() {
  this.board = [];
  for (var i = 0; i < 8; i++) {
    this.board.push([]);
    for (var j = 0; j < 8; j++) {
      this.board[i][j] = null;
    }
  }
};
