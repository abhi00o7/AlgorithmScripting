// problem Statement

/**
 * Given an m x n grid of characters board and a string word,
 * return true if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 */

// Solution 1: Using DFS

// Time Complexity: O(m * n * 4^s)
// Space Complexity: O(s)

// function to check if the word exists in the grid
function wordSearch(board, word) {
  // iterate through the grid
  for (let i = 0; i < board.length; i++) {
    // iterate through the grid
    for (let j = 0; j < board[i].length; j++) {
      // check if the word exists in the grid
      if (dfs(board, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
}

// recursive function to check if the word exists in the grid
function dfs(board, i, j, word, index) {
  // base condition
  if (index === word.length) {
    return true;
  }
  // check if the indices are valid
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word[index]
  ) {
    return false;
  }
  // mark the current cell as visited
  board[i][j] = "#";
  // check if the word exists in the grid in the right direction
  if (dfs(board, i + 1, j, word, index + 1)) {
    return true;
  }
  // check if the word exists in the grid in the left direction
  if (dfs(board, i - 1, j, word, index + 1)) {
    return true;
  }
  // check if the word exists in the grid in the top direction
  if (dfs(board, i, j + 1, word, index + 1)) {
    return true;
  }
  // check if the word exists in the grid in the bottom direction
  if (dfs(board, i, j - 1, word, index + 1)) {
    return true;
  }
  // mark the current cell as unvisited
  board[i][j] = word[index];
  return false;
}


// examples
const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];

console.log(wordSearch(board, "ABCCED")); // true
console.log(wordSearch(board, "SRK")); // false