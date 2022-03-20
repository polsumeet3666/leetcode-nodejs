// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {

    let myMap = new Map();
    for (let i = 0; i < s.length; i++) {
      if (myMap.has(s.charAt(i))) {
        let val = myMap.get(s.charAt(i));
        myMap.set(s.charAt(i), val + 1);
      } else {
        myMap.set(s.charAt(i), 1);
      }
    }
    for (let i = 0; i < s.length; i++) {
      if (myMap.has(s.charAt(i)) && myMap.get(s.charAt(i)) == 1) {
        return i;
      }
    }
    return -1;
};

let s = 'leetcode'
// let s = 'loveleetcode'
// let s = 'aabb'
// let s = '';
// let s = "aadadaad";
// let s = "adaccdcda"
// let s = "dbddaadbb";

console.log(firstUniqChar(s));