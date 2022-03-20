// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function (s, t) {
   if (s.length != t.length) return false;
   let sMap = generateMap(s);
   let tMap = generateMap(t);
   let mySet = new Set();
   for (let i = 0; i < s.length; i++) {
     let char = s.charAt(i);
     if (!mySet.has(char)) {
       mySet.add(char);
       if (sMap.get(char) != tMap.get(char)) return false;
     }
   }
   return true;
 };
 function generateMap(str) {
   let map = new Map();
   for (let i = 0; i < str.length; i++) {
     let char = str.charAt(i);
     if (map.has(char)) {
       map.set(char, map.get(char) + 1);
     } else {
       map.set(char, 1);
     }
   }
   return map;
 }

//  let s ='car',t='rat';
// let s = 'cat',t='tac';
let s = 'cat',t='tacc';

console.log(isAnagram(s,t));