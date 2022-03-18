// https://leetcode.com/problems/reshape-the-matrix/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
  let mat_r = mat.length;
  let mat_c = mat[0].length;
  let totalElements = mat_r * mat_c;
  let reshapeTotalElements = r * c;
  // console.log(mat_r, mat_c, totalElements, reshapeTotalElements);
  if (totalElements != reshapeTotalElements) {
    return mat;
  }

  let reshape = [];
  let cur_r = 0,
    cur_c = 0;

  // row-wise traverse
  for (let i = 0; i < mat_r; i++) {
    for (let j = 0; j < mat_c; j++) {
      // console.log(mat[i][j]);
      if (reshape.length < r && reshape[cur_r] == undefined) {
        reshape[cur_r] = [];
      }
      if (reshape[cur_r].length < c) {
        reshape[cur_r].push(mat[i][j]);
      }

      if (reshape[cur_r].length == c) {
        cur_r++;
      }
    }
  }
  return reshape;
};

// let mat = [[1,2],[3,4]];
// let r =1,c=4;
// let r = 4,c=1;
let mat = [[1,2,3,4]], r=2,c=2;
console.log(matrixReshape(mat,r,c));