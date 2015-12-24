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
  return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
};

Chess.King = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♚" : "♔";
};

Chess.inheritsFromPiece(Chess.King);

Chess.King.prototype.validMove = function(startPos, endPos) {
  return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
};

Chess.Knight = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♞" : "♘";
};

Chess.inheritsFromPiece(Chess.Knight);

Chess.Knight.prototype.validMove = function(startPos, endPos) {
  return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
};

Chess.Bishop = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♝" : "♗";
};

Chess.inheritsFromPiece(Chess.Bishop);

Chess.Bishop.prototype.validMove = function(startPos, endPos) {
  return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
};

Chess.Rook = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♜" : "♖";
};

Chess.inheritsFromPiece(Chess.Rook);

Chess.Rook.prototype.validMove = function(startPos, endPos) {
  return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
};

Chess.Pawn = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♟" : "♙";
};

Chess.inheritsFromPiece(Chess.Pawn);

Chess.Pawn.prototype.validMove = function(startPos, endPos) {
  return Chess.Piece.prototype.validMove.call(this, startPos, endPos);
};
