// Iteration 1:
// Write a program that creates a string that represents and 8 x 8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a '#' character. The caracters should form a chess board.

// Iteration 2:
// When you have a program that generates this pattern, define a variable `size = 8` and change the program so that it works for any `size`, outputting a grid of the given width and height.

// Pseudocode:
  // if row div by 2
    // if col div by 2, put #
    // else put space
  // else
    // if col div by 2, put space
    // else put #

// Iteration 1
var chessboard = "";
for (var row = 0; row < 8; row++) {
  if (row % 2 === 0) {
    for (var col = 0; col < 8; col++) {
      col % 2 === 0 ? chessboard += '#' : chessboard += ' ' ;
    };
    chessboard += '\n'
  } else {
    for (var col = 0; col < 8; col++) {
      col % 2 === 0 ? chessboard += ' ' : chessboard += '#';
    };
    chessboard += '\n'
  }
}
console.log(chessboard);

// Iteration 2
var size = 10
var chessboard = "";
for (var row = 0; row < size; row++) {
  if (row % 2 === 0) {
    for (var col = 0; col < size; col++) {
      col % 2 === 0 ? chessboard += '#' : chessboard += ' ' ;
    };
    chessboard += '\n'
  } else {
    for (var col = 0; col < size; col++) {
      col % 2 === 0 ? chessboard += ' ' : chessboard += '#';
    };
    chessboard += '\n'
  }
}
console.log(chessboard);
