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
  this.grid[startPos[0]][startPos[1]] = null;
  this.grid[endPos[0]][endPos[1]] = piece;
};

Chess.Board.prototype.getPiece = function(array) {
  return this.grid[array[0]][array[1]];
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
