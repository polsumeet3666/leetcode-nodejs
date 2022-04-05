// https://leetcode.com/problems/majority-element/


/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  const myMap = new Map();
  const majority = nums.length === 2 ? 2 : Math.ceil(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      let val = myMap.get(nums[i]);
      val++;
      if (val === majority) {
        return nums[i];
      }
      myMap.set(nums[i], val);
    } else {
      myMap.set(nums[i], 1);
    }
  }
};

// const nums = [2,3,3];
// const nums = [2, 2, 1, 1, 1, 2, 2];
// const nums = [1];
const nums = [2,2]
console.log(majorityElement(nums));


