/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */
/**
 * @param {string} s
 * @return {string[]}
 */

// Approach 1: Linear-time Slice Using Substring + HashSet
// O((N-L)L) O((N-L)L)
var findRepeatedDnaSequences = function (s) {
  let store = new Set(),
    result = new Set();
  for (let i = 0; i < s.length - 9; i++) {
    const str = s.substring(i, i + 10);
    if (store.has(str)) {
      result.add(str);
    } else {
      store.add(str);
    }
  }
  return Array.from(result);
};
