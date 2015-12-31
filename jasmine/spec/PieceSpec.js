describe("Piece", function() {
  beforeEach(function() {
    board = new Chess.Board(this.blankBoard());
  });

  describe("#init", function() {
    it("should set the pieces color, currentPosition, and board it's on", function() {
      var king = new Chess.King("black", board, [0, 1]);
      expect(king.color).toEqual("black");
      expect(king.board).not.toBeNull();
      expect(king.currentPosition[0]).toEqual(0);
      expect(king.currentPosition[1]).toEqual(1);
    });
  });

  describe("#availableMoves", function(){
    it("should return the available positions the piece can move to", function() {
      var piece = new Chess.Knight("black", board, [4,4]);
      board.grid[4][4] = piece;
      var expectedMoves = [[2,3], [2,5], [3,2], [3,6], [5,2], [5,6], [6,3], [6,5]];
      var availableMoves = piece.availableMoves();

      for (var i = 0; i < availableMoves.length; i++) {
        expect(Chess.Util._arrayEquals(availableMoves[i], expectedMoves[i])).toBe(true);
      }
    });
  });

  describe("#validMove", function() {
    it("returns true if the move is valid", function() {
      var piece = new Chess.Knight("black", board, [4,4]);
      board.grid[4][4] = piece;

      expect(piece.validMove(piece.currentPosition, [2,3])).toBe(true);
    });

    it("returns false if the move is invalid", function() {
      var piece = new Chess.Knight("black", board, [4,4]);
      board.grid[4][4] = piece;

      expect(piece.validMove(piece.currentPosition, [2,2])).toBe(false);
    });
  });

  describe("#pieceDirection", function() {
    it("returns the direction the piece is moving", function() {
      var piece = new Chess.Queen("black", board, [4,4]);
      board.grid[4][4] = piece;

      expect(piece.pieceDirection(piece.currentPosition, [7,4])).toEqual("down");
      expect(piece.pieceDirection(piece.currentPosition, [5,5])).toEqual("downright");
      expect(piece.pieceDirection(piece.currentPosition, [4,5])).toEqual("right");
      expect(piece.pieceDirection(piece.currentPosition, [3,5])).toEqual("upright");
      expect(piece.pieceDirection(piece.currentPosition, [2,4])).toEqual("up");
      expect(piece.pieceDirection(piece.currentPosition, [2,2])).toEqual("upleft");
      expect(piece.pieceDirection(piece.currentPosition, [4,1])).toEqual("left");
      expect(piece.pieceDirection(piece.currentPosition, [5,3])).toEqual("downleft");
    });
  });
});
