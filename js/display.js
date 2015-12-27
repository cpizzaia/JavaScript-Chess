Chess.Display = function(board) {
  this.board = board;
  this.chessboard = document.getElementById("chessboard");
  this.render(null);
};

Chess.Display.prototype.render = function(selectedPiece) {
  this.empty();
  for (var i = 0; i < this.board.grid.length; i++) {
    for (var j = 0; j < this.board.grid[i].length; j++) {
      this.appendSquare(i, j, this.board.grid[i][j], selectedPiece);
    }
  }
};

Chess.Display.prototype.empty = function() {
  while (this.chessboard.firstChild) {
    this.chessboard.removeChild(this.chessboard.firstChild);
  }
};

Chess.Display.prototype.appendSquare = function(i, j, piece, selectedPiece) {
  var square = document.createElement("div");


  if (selectedPiece !== null && Chess.Util._includesSubArray(selectedPiece.moves, [i, j])) {
    square.className = "green";
  } else if ((i + j) % 2 === 0) {
    square.className = "white";
  } else {
    square.className = "brown";
  }

  square.id = "[" + i + "," + j + "]";

  if (piece !== null) square.innerHTML = piece.show;

  if (Chess.startPos !== null && Chess.startPos[0] === i && Chess.startPos[1] === j) {
    square.className = square.className + " selected-piece";
  }

  square.addEventListener('click', function() {
    Chess.selectPosition(JSON.parse(square.id));
  });

  this.chessboard.appendChild(square);
};

Chess.Display.prototype._includesSubArray = function(array, subArray) {
  for (var i = 0; i < array.length; i++) {
    if (Chess._arrayEquals(array[i], subArray) === true) return true;
  }
  return false;
};
