/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j=i+1;j<Math.min(i+1+k,nums.length);j++){
      let cond1 = Math.abs(nums[i]-nums[j])<= t;
      let cond2 = Math.abs(i-j)<=k;
      // console.log(i,j,nums[i],nums[j],cond1,cond2)
      if (cond1 && cond2){
        return true;
      }
    }
  }
  return false;
};

// console.log(containsNearbyAlmostDuplicate([8,7,15,1,6,1,9,15],1,3));
// console.log(containsNearbyAlmostDuplicate([1,2,3,1],3,0));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9],2,3));
