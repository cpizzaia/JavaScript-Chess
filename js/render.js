Chess.Display = function(board) {
  this.board = board;
  this.chessboard = document.getElementById("chessboard");
};

Chess.Display.prototype.render = function() {
  this.empty();
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (this.board[i][j] === null) {
        this.appendEmptySquare();
      } else {
        this.appendPiece(i, j, this.board[i][j].show);
      }
    }
  }
};

Chess.Display.prototype.empty = function() {
  while (this.chessboard.firstChild) {
    this.chessboard.removeChild(this.chessboard.firstChild);
  }
};

Chess.Display.prototype.appendEmptySquare = function(i, j) {
  var square = document.createElement("div");

  if ((i + j) % 2 === 0) {
    square.className = "white";
  } else {
    square.className = "black";
  }

  this.chessboard.appendChild(square);
};

Chess.Display.prototype.appendOccupidSquare = function(i, j, piece) {

};
