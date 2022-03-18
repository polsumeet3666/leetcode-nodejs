/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // create hashmap
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // main
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];

    if (map.has(num) && map.get(num) != i) {
      // if (map.has(num) ) {
      return [i, map.get(num)];
    }
  }
};
// let nums = [2,7,11,15],target = 9;
// let nums = [-2,-7,-11,-15],target = -9;
// let nums = [3,2,4],target = 6;
let nums = [3,3],target = 6;
console.log(twoSum(nums,target))