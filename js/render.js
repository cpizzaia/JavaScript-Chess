Chess.Display = function(board) {
  this.board = board;
  this.chessboard = document.getElementById("chessboard");
};

Chess.Display.prototype.render = function() {
  this.empty();
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      this.appendSquare(i, j, this.board[i][j]);
    }
  }
};

Chess.Display.prototype.empty = function() {
  while (this.chessboard.firstChild) {
    this.chessboard.removeChild(this.chessboard.firstChild);
  }
};

Chess.Display.prototype.appendSquare = function(i, j, piece) {
  var square = document.createElement("div");

  if ((i + j) % 2 === 0) {
    square.className = "white";
  } else {
    square.className = "black";
  }

  if (piece !== null) {
    square.innerHtml = piece.show;
  }

  this.chessboard.appendChild(square);
};
