Chess.Display = function(board) {
  this.board = board;
  this.chessboard = document.getElementById("chessboard");
  this.render();
};

Chess.Display.prototype.render = function() {
  this.empty();
  for (var i = 0; i < this.board.boardArray.length; i++) {
    for (var j = 0; j < this.board.boardArray[i].length; j++) {
      this.appendSquare(i, j, this.board.boardArray[i][j]);
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
    square.className = "brown";
  }

  square.id = "[" + i + "," + j + "]";

  if (piece !== null) {
    square.innerHTML = piece.show;
  }

  this.chessboard.appendChild(square);
};
