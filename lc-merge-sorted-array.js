/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function (nums1, m, nums2, n) {
   let i = 0;
   let j = 0;
   let count = 0;
   let nums1_copy = [...nums1];
   while (i < m && j < n) {
     if (nums1_copy[i] > nums2[j]) {
       nums1[count] = nums2[j];
       j++;
       count++;
     } else {
       nums1[count] = nums1_copy[i];
       i++;
       count++;
     }
   }
   while (i < m) {
     nums1[count] = nums1_copy[i];
     i++;
     count++;
   }
   while (j < n) {
     nums1[count] = nums2[j];
     j++;
     count++;
   }
  // //  nums1_copy = result;
  //  console.log(nums1_copy,nums1,nums2)
  //  // console.log(result);
 };;
merge([1,2,3,0,0,0],3,[2,5,6],3);
// merge([0],0,[1],1);
// merge([1],1,[],0);

