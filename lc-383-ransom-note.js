// https://leetcode.com/problems/ransom-note/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function (ransomNote, magazine) {
   // let rMap = generateMap(ransomNote);
   let mMap = generateMap(magazine);
   for (let i = 0; i < ransomNote.length; i++) {
     let char = ransomNote.charAt(i);
     if (!mMap.has(char)) return false;
     if (mMap.get(char) == 0) return false;
     mMap.set(char, mMap.get(char) - 1);
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

let ransom = 'aa', magazine = 'aa';
console.log(canConstruct(ransom,magazine));
