// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let indexMap = null;
  let common = null;
  if (len1 >= len2) {
    indexMap = createIndexMap(nums1);
    common = findIntersectElements(indexMap, nums2);
  } else {
    indexMap = createIndexMap(nums2);
    common = findIntersectElements(indexMap, nums1);
  }

  return common;
};

function findIntersectElements(map, nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]).length > 0) {
      arr.push(nums[i]);
      map.get(nums[i]).pop();
    }
  }
  return arr;
}
function createIndexMap(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      // append current occurance
      let value = map.get(nums[i]);
      value.push(i);
      map.set(nums[i], value);
    } else {
      // value and array of occurance index wise
      map.set(nums[i], [i]);
    }
  }

  return map;
}

// let nums1 = [1,2,2,1],nums2 = [2,2];
let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
