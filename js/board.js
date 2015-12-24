Chess.Board = function() {
  this.init();
};

Chess.Board.prototype.init = function() {
  this.boardArray = [];
  for (var i = 0; i < 8; i++) {
    this.boardArray.push([]);
    for (var j = 0; j < 8; j++) {
      this.boardArray[i][j] = this.placePiece(i, j);
    }
  }
};

Chess.Board.prototype.placePiece = function(i, j) {
  if (i === 1) {
    return new Chess.Pawn("black");
  } else if (i === 6) {
    return new Chess.Pawn("white");
  } else if (i === 0 && (j === 7 || j === 0)) {
    return new Chess.Rook("black");
  } else if (i === 0 && (j === 6 || j === 1)) {
    return new Chess.Knight("black");
  } else if (i === 0 && (j === 5 || j === 2)) {
    return new Chess.Bishop("black");
  } else if (i === 0 && j === 4) {
    return new Chess.King("black");
  } else if (i === 0 && j === 3) {
    return new Chess.Queen("black");
  } else if (i === 7 && (j === 7 || j === 0)) {
    return new Chess.Rook("white");
  } else if (i === 7 && (j === 6 || j === 1)) {
    return new Chess.Knight("white");
  } else if (i === 7 && (j === 5 || j === 2)) {
    return new Chess.Bishop("white");
  } else if (i === 7 && j === 4) {
    return new Chess.King("white");
  } else if (i === 7 && j === 3) {
    return new Chess.Queen("white");
  } else {
    return null;
  }
};
