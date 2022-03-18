/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length == 1) return nums[0];
  else if (nums.length == 2) return Math.max(...nums, nums[0] + nums[1]);

  let maxSoFar = Number.MIN_SAFE_INTEGER;

  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    currentMax += nums[i];

    if (currentMax > maxSoFar) {
      maxSoFar = currentMax;
    }
    if (currentMax < 0) {
      currentMax = 0;
    }
  }
  return maxSoFar;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
// let nums = [-1]
// let nums = [-2,1]
// let nums = [-3,-2,-1]
// let nums = [3,2,1]
// let nums = [1,2]
// let nums = [-1,0,-2]
// let nums = [-2,-1,-2]
console.log(maxSubArray(nums));