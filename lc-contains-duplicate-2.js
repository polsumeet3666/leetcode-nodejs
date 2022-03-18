/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        // validate condition
        if (Math.abs(map.get(nums[i]) - i) <= k) {
          return true;
        } else {
          map.set(nums[i], i);
        }
      } else {
        map.set(nums[i], i);
      }
    }
    return false;
};
console.log(containsNearbyDuplicate([1,0,1,1],1));