// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function (nums1, nums2) {
   let merged = mergeArray(nums1, nums2);
   return calcMedian(merged);
 };
 function calcMedian(arr) {
   if (arr.length % 2 == 0) {
     // even
     let mid = arr.length / 2;
     return parseFloat((arr[mid] + arr[mid - 1]) / 2).toFixed(5);
   } else {
     // odd
     let mid = parseInt(arr.length / 2);
     return parseFloat(arr[mid]).toFixed(5);
   }
 }
 function mergeArray(nums1, nums2) {
   let i = 0,
     j = 0;
   let merged = [];
   while (i < nums1.length && j < nums2.length) {
     if (nums1[i] > [nums2[j]]) {
       merged.push(nums2[j]);
       j++;
     } else {
       merged.push(nums1[i]);
       i++;
     }
   }
   while (i < nums1.length) {
     merged.push(nums1[i]);
     i++;
   }
   while (j < nums2.length) {
     merged.push(nums2[j]);
     j++;
   }
   // console.log(merged);
   return merged;
 }

// let nums1 = [1,2], nums2 = [3];
let nums1 = [], nums2 = [1];

console.log(findMedianSortedArrays(nums1,nums2));