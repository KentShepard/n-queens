/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n: n}); //fixme
  var solution = [];
  var numPieces = 0;
  var rowIndex, colIndex;

  var playBoard = function(board, rowIndex, colIndex) {
    rowIndex = rowIndex || 0;
    colIndex = colIndex || 0;
    if (numPieces === n) {
      return board;
    } else {
      for (var i = colIndex; i < n; i++) {
        board.togglePiece(rowIndex, i);
        numPieces++;
        if (board.hasAnyRooksConflicts() === false) {
          continue;
        } else {
          board.togglePiece(rowIndex, i);
          numPieces--;
        }
      }
      if (numPieces < n) {
        rowIndex++;
        playBoard(board, rowIndex, colIndex);
      } else {
        return board;
      }
    }
  };

  playBoard(board, rowIndex, colIndex);
  for (var key in board.attributes) {
    if (key !== 'n') {
      solution.push(board.attributes[key]);
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  var playBoard = function(rowIndex) {
    if (rowIndex === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyRooksConflicts()) {
        playBoard(rowIndex + 1);
      }
      board.togglePiece(rowIndex, i);
    }
  };
  playBoard(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({n: n});
  var numPieces = 0;

  var playBoard = function(row, n, board) {
    if (row === n) {
      return board;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        var result = playBoard(row + 1, n, board);
        if (result) {
          return result;
        }
      }
      board.togglePiece(row, i);
    }
  // if all rows exhausted
  // iterate over possible decisions
    // place a piece
    // recurse into remaining problem
    // exit once solution is found
    // unplace a piece
  };
  playBoard(0, n, board);
  for (var key in board.attributes) {
    if (key !== 'n') {
      solution.push(board.attributes[key]);
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  var playBoard = function(rowIndex) {
    if (rowIndex === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyQueensConflicts()) {
        playBoard(rowIndex + 1);
      }
      board.togglePiece(rowIndex, i);
    }
  };
  playBoard(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
