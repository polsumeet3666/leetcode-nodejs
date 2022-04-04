// https://leetcode.com/problems/search-a-2d-matrix/;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
   if (matrix.length == 1) {
     return search(matrix, 0, target);
   }
   for (let i = 1; i < matrix.length; i++) {
     if (matrix[i][0] > target) {
       return search(matrix, i - 1, target);
     } 
   }
   return search(matrix,matrix.length-1,target);
   
 };
 function search(matrix, row, target) {
   for (let i = 0; i < matrix[row].length; i++) {
     if (matrix[row][i] == target) return true;
   }
   return false;
 }
// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
let matrix = [[1],[3]], target = 3;
console.log(searchMatrix(matrix,target));