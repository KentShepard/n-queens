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



window.findNRooksSolution = function(n, rowIndex, colIndex) {
  var board = new Board({n: n}); //fixme
  var solution = [];
  var numPieces = 0;

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
  var currentRowsOcuppied = [];
  var currentColsOccupied = [];

  var playBoard = function(rowIndex, currentRows, currentCols) {
    for (var i = 0; i < n; i++) {
      if (currentRows.length > 0) {
        if (currentRows.indexOf(rowIndex) > 0) {
          continue;
        }
      }
      if (currentCols.length > 0) {
        if (currentCols.indexOf(i) > 0) {
          continue;
        }
      }
      board.togglePiece(rowIndex, i);
      currentRows.push(rowIndex);
      currentCols.push(i);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(rowIndex, i);
        currentRows.pop();
        currentCols.pop();
      } else {
        if (rowIndex + 1 < n) {
          playBoard(rowIndex + 1, currentRows, currentCols);
          board.togglePiece(rowIndex, i);
          currentRows.pop();
          currentCols.pop();
        } else if (rowIndex === n - 1) {
          solutionCount++;
          board.togglePiece(rowIndex, i);
          currentRows.pop();
          currentCols.pop();
        }
      }
    }
  };
  playBoard(0, currentRowsOcuppied, currentColsOccupied);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
