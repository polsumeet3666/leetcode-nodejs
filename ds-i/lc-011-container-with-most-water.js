// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let len = height.length;
  let max = 0;
  let i = 0,
    j = len - 1;
  while (i < j) {
    let min = Math.min(height[i], height[j]);
    let dist = j - i;
    let curMax = min * dist;
    max = Math.max(max, curMax);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};



// let arr = [1,8,6,2,5,4,8,3,7,9];
// let arr = [1,1]
// let [i,j] = getMid(arr);
// console.log(arr[i],arr[j])
// let arr = [4,3,2,1,4];
// let arr = [1,2,4,3]
let arr =[1,8,6,2,5,4,8,3,7]
console.log(maxArea(arr));