// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  let r = matrix.length - 1;
  let c = matrix[0].length - 1;
  let result = [];
  for (let i = 0; i <= c; i++) {
    let arr = [];
    for (let j = r; j >= 0; j--) {
      arr.push(matrix[j][i]);
    }
    result.push(arr);
  }
  // console.log(result);
  // console.log(matrix)
  for (let i = 0; i <= r; i++) {
    for (let j = 0; j <= c; j++) {
      matrix[i][j] = result[i][j];
    }
  }
  // console.log(matrix);

};




// let matrix = [[1,2],[3,4]];
// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix);

// 1,2
// 3,4