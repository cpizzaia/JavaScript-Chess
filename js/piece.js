Chess.inheritsFromPiece = function(child) {
  child.prototype = Object.create(Chess.Piece.prototype);
};

Chess.Piece = function(color, board) {
  this.init(color, board);
};

Chess.Piece.prototype.init = function(color, board) {
  this.color = color;
  this.board = board;
};

Chess.Piece.prototype.validMove = function(startPos, endPos) {
  return true;
};



Chess.Queen = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♛" : "♕";
};

Chess.inheritsFromPiece(Chess.Queen);

Chess.Queen.prototype.validMove = function(startPos, endPos) {
  var
  a = startPos[0],
  b = startPos[1],
  x = endPos[0],
  y = endPos[1];

  if (Math.abs(x - a) === Math.abs(y - b) || x === a || y === b) {
    return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
  } else {
    return false;
  }
};



Chess.King = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♚" : "♔";
};

Chess.inheritsFromPiece(Chess.King);

Chess.King.prototype.validMove = function(startPos, endPos) {
  var
  a = startPos[0],
  b = startPos[1],
  x = endPos[0],
  y = endPos[1];

  if (Math.abs(x - a) < 2 && Math.abs(y - b) < 2) {
    return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
  } else {
    return false;
  }
};



Chess.Knight = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♞" : "♘";
};

Chess.inheritsFromPiece(Chess.Knight);

Chess.Knight.prototype.validMove = function(startPos, endPos) {
  var
  a = startPos[0],
  b = startPos[1],
  x = endPos[0],
  y = endPos[1];

  if ((Math.abs(x - a) === 1 && Math.abs(y - b) === 2) || (Math.abs(x - a) === 2 && Math.abs(y - b) === 1)) {
    return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
  } else {
    return false;
  }
};



Chess.Bishop = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♝" : "♗";
};

Chess.inheritsFromPiece(Chess.Bishop);

Chess.Bishop.prototype.validMove = function(startPos, endPos) {
  var
  a = startPos[0],
  b = startPos[1],
  x = endPos[0],
  y = endPos[1];

  if (Math.abs(x - a) === Math.abs(y - b)) {
    return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
  } else {
    return false;
  }
};



Chess.Rook = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♜" : "♖";
};

Chess.inheritsFromPiece(Chess.Rook);

Chess.Rook.prototype.validMove = function(startPos, endPos) {
  var
  a = startPos[0],
  b = startPos[1],
  x = endPos[0],
  y = endPos[1];

  if (x === a || y === b) {
    return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
  } else {
    return false;
  }

};



Chess.Pawn = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♟" : "♙";
};

Chess.inheritsFromPiece(Chess.Pawn);

Chess.Pawn.prototype.validMove = function(startPos, endPos) {
  return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
};
