// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    
  if (numRows == 1) return [[1]];
  else if (numRows == 2) return [[1],[1, 1]];

  let pascals = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    pascals[i] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        pascals[i].push(1);
      } else {
        let previousRow = i - 1;
        let element = pascals[previousRow][j - 1] + pascals[previousRow][j];
        pascals[i].push(element);
      }
    }
  }
  return pascals;
};

console.log(generate(5));