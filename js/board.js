Chess.Board = function() {
  this.init();
};

Chess.Board.prototype.init = function() {
  this.grid = [];
  for (var i = 0; i < 8; i++) {
    this.grid.push([]);
    for (var j = 0; j < 8; j++) {
      this.grid[i][j] = this.placePiece(i, j);
    }
  }
};

Chess.Board.prototype.move = function(startPos, endPos) {
  var piece = this.grid[startPos[0]][startPos[1]];

  if (piece.validMove(startPos, endPos)) {
    this.grid[startPos[0]][startPos[1]] = null;
    this.grid[endPos[0]][endPos[1]] = piece;
    piece.currentPosition = endPos;
  }
};

Chess.Board.prototype.getPiece = function(array) {
  return this.grid[array[0]][array[1]];
};

Chess.Board.prototype.placePiece = function(i, j) {
  var position = [i ,j];
  if (i === 1) {
    return new Chess.Pawn("black", this, position);
  } else if (i === 6) {
    return new Chess.Pawn("white", this, position);
  } else if (i === 0 && (j === 7 || j === 0)) {
    return new Chess.Rook("black", this, position);
  } else if (i === 0 && (j === 6 || j === 1)) {
    return new Chess.Knight("black", this, position);
  } else if (i === 0 && (j === 5 || j === 2)) {
    return new Chess.Bishop("black", this, position);
  } else if (i === 0 && j === 4) {
    return new Chess.King("black", this, position);
  } else if (i === 0 && j === 3) {
    return new Chess.Queen("black", this, position);
  } else if (i === 7 && (j === 7 || j === 0)) {
    return new Chess.Rook("white", this, position);
  } else if (i === 7 && (j === 6 || j === 1)) {
    return new Chess.Knight("white", this, position);
  } else if (i === 7 && (j === 5 || j === 2)) {
    return new Chess.Bishop("white", this, position);
  } else if (i === 7 && j === 4) {
    return new Chess.King("white", this, position);
  } else if (i === 7 && j === 3) {
    return new Chess.Queen("white", this, position);
  } else {
    return null;
  }
};
