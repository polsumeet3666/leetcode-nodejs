// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s == null || s.length <1) return ""; 
  let max = 0,start=0,end=0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expand(s, i, i); // odd palin
    let len2 = expand(s, i, i + 1); // even palin
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return s.substring(Math.ceil(start),end+1);
};

function expand(s, l, r) {
  while (l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
    l--;
    r++;
  }
  return r - l - 1;
}

console.log(longestPalindrome('abba'))
