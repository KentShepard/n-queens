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
  var numPiece = 0;
  var solution = undefined;


  var playBoard = function(n, rowIndex, colIndex) {
    for (var i = 0; i < n - 1; i++) {
      board.togglePiece(rowIndex, i);
      console.log(board);
      if (hasAnyRooksConflicts() === false) {
        if (rowIndex++ < n - 1) {
          playBoard(n, rowIndex++);
        } else {
          console(board);
        }
      } else {
        board.togglePiece(rowIndex, i);
      }
    }

    //for loop - through each row
      //toggle first pieces
      //check for conflicts
      //increase row index
      //check if row index <= n - 1
        //run playboard with incremented row index
        //recursively run until row index is too large

  };

  playBoard(n, 0, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
