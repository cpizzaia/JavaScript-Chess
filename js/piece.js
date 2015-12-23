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

Chess.Queen = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♛" : "♕";
};

Chess.King = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♚" : "♔";
};

Chess.Knight = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♞" : "♘";
};

Chess.Bishop = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♝" : "♗";
};

Chess.Rook = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♜" : "♖";
};

Chess.Pawn = function(color, board) {
  this.init(color, board);
  this.show = this.color === "black" ? "♟" : "♙";
};


Chess.inheritsFromPiece(Chess.Queen);
Chess.inheritsFromPiece(Chess.King);
Chess.inheritsFromPiece(Chess.Knight);
Chess.inheritsFromPiece(Chess.Bishop);
Chess.inheritsFromPiece(Chess.Rook);
Chess.inheritsFromPiece(Chess.Pawn);
