// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function (x) {
   if (x < 0) return false;
   // console.log(reverseNumber(x));
   let rev = reverseNumber(x);
   return rev == x;
 };

 function reverseNumber(num) {
   let rev = 0;
   while (num > 0) {
     rev = rev * 10 + (num % 10);
     num = parseInt(num / 10);
   }
   return rev;
 }

console.log(isPalindrome(10))