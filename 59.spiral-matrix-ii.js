/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n == 0) return [];
  if (n == 1) return [[1]];
  let result = [],
    num = 1;
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let rowStart = 0,
    rowEnd = n - 1,
    colStart = 0,
    colEnd = n - 1;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    // to right
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = num;
      num += 1;
    }
    rowStart += 1;

    // downwards
    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = num;
      num += 1;
    }
    colEnd -= 1;

    // to left
    for (let i = colEnd; i >= colStart; i--) {
      result[rowEnd][i] = num;
      num += 1;
    }
    rowEnd -= 1;

    // upwards
    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][colStart] = num;
      num++;
    }
    colStart += 1;
  }
  return result;
};
