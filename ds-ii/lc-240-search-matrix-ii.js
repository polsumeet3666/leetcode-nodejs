// https://leetcode.com/problems/search-a-2d-matrix-ii/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let count = 0;
  let found = false;
  for (let i = 0; i < matrix.length; i++) {
    if (found) break;
    for (let j = 0; j < matrix[0].length; j++) {
      count++;
      if (matrix[i][j] == target) {
        found = true;
        break;
      } else if (matrix[i][j] > target) break;
    }
  }
  console.log(count);
  return found;
};

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22]];
const target = 22;
console.log(searchMatrix(matrix,target));

