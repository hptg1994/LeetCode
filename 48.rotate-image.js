/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix, map = {}) {
  for (var row = 0; row < matrix.length; row++) {
    map[row] = [];

    for (var col = matrix.length - 1; col >= 0; col--) {
      map[row].push(matrix[col][row]);
    }
  }

  console.log(map);

  for (var newRow in map) {
    for (var i = 0; i < map[newRow].length; i++) {
      matrix[newRow][i] = map[newRow][i];
    }
  }
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
