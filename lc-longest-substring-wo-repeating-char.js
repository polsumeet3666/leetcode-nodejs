// 3. Longest Substring Without Repeating Characters



/**
 * @param {string} s
 * @return {number}
 */
//  var lengthOfLongestSubstring = function(s) {
  
//   let longestSoFar = 0;
//   let longest = 0;
//   let mySet = new Set();
//   for (let i = 0; i < s.length; i++) {
//     let char = s.charAt(i);
//     if (mySet.has(char)) {
//       // do something
//       if (longest > longestSoFar) {
//         longestSoFar = longest;
//         mySet.add(char);
//       } else {
//         longest = 0;
//         mySet = new Set();
//       }
//     } else {
//       longest++;
//       mySet.add(char);
//     }
//   }
//   return Math.max(longestSoFar,longest);
// };
var lengthOfLongestSubstring = function(s) {
  
  let sptr = 0;
  let longest = 0;
  let myMap = new Map();
  for (let eptr = 0;eptr < s.length;eptr++) {
    if (myMap.has(s[eptr])) {
      sptr = Math.max(sptr,myMap.get(s[eptr])+1)
    }
    myMap.set(s[eptr],eptr);
    longest = Math.max(longest,eptr-sptr+1);
  }
  return longest;
};


// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring(' '))
// console.log(lengthOfLongestSubstring('wwwww'))
// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('dvdf'))
// console.log(lengthOfLongestSubstring('bacbd'))
// console.log(lengthOfLongestSubstring('abca'))
// console.log(lengthOfLongestSubstring('ckilbkd'))
console.log(lengthOfLongestSubstring("ohvhjdml"));



