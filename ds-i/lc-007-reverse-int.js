// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
 
  let rev = 0;
  let isNeg = x < 0 ? true : false;
  if (isNeg) x *= -1;

  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (isNeg) rev *= -1;

  let min = -2147483648;
  let max = 2147483647;
  // console.log(min <= rev, rev <= max);
  if (min <= rev && rev <= max) {
    return rev;
  }
  return 0;
};

let x =-123;
console.log(reverse(x))