// https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  let mat = [];
  for (let i = 0; i < n; i++) {
    mat.push(new Array(n).fill(0));
  }
  let vistited = 0;
  for (let l = 0; l < parseInt(n + 1 / 2); l++) {
    for (let i = l; i < n - l; i++) {
      mat[l][i] = ++vistited;
    }

    for (let i = l + 1; i < n - l; i++) {
      mat[i][n - l - 1] = ++vistited;
    }

    for (let i = l + 1; i < n - l; i++) {
      mat[n - l - 1][n - i - 1] = ++vistited;
    }

    for (let i = l + 1; i < n - l - 1; i++) {
      mat[n - i - 1][l] = ++vistited;
    }
  }
  // console.log(mat);
  return mat;
};

generateMatrix(3);

// 00 01 02
// 10 11 12
// 20 21 22

// 00 - 02
// 02 - 22
// 22 - 20
// 20 - 10
