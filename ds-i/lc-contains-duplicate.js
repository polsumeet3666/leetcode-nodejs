var containsDuplicate = function(nums) {
  let map = new Map();
  for (let i=0;i<nums.length;i++) {
      if (map.has(nums[i])){
          return true;
      } else {
          map.set(nums[i],true)
      }
  }
  return false;
};

console.log("🚀 ~ file: lc-contains-duplicate.js ~ line 13 ~ containsDuplicate([1,2,3,1])", containsDuplicate([1,2,3,1]))
containsDuplicate([1,2,3,1])