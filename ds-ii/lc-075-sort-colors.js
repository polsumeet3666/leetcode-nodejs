// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let b0 = 0;
  let b1 = 0;
  let b2 = 0;
  nums.forEach((num) => {
    if (num === 0) b0++;
    else if (num === 1) b1++;
    else if (num === 2) b2++;
  });
  let i = 0;
  while (b0 > 0) {
    nums[i] = 0;
    b0--;
    i++;
  }
  while (b1 > 0) {
    nums[i] = 1;
    b1--;
    i++;
  }
  while (b2 > 0) {
    nums[i] = 2;
    b2--;
    i++;
  }
};

const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
