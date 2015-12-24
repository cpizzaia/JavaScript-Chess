Chess.Board = function() {
  this.init();
};

Chess.Board.prototype.init = function() {
  this.boardArray = [];
  for (var i = 0; i < 8; i++) {
    this.boardArray.push([]);
    for (var j = 0; j < 8; j++) {
      this.boardArray[i][j] = null;
    }
  }
};
