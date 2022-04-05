// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const mySet = new Set();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      mySet.delete(nums[i]);
      sum -= nums[i];
    } else {
      mySet.add(nums[i]);
      sum += nums[i];
    }
  }
  return sum;
};

const nums = [1, 2, 2];
console.log(singleNumber(nums));
// console.log(1 ^ 2);
// console.log(1 ^ 2 ^ 2);
