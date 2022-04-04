// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function (s) {
   let str = "";
   s = s.trim();
   for (let i = 0; i < s.length; i++) {
     let char = s.charAt(i);
     if (str == "" && (char == "+" || char == "-")) {
       str += char;
     } else if (Number(char) >= 0 && Number(char) <= 9 && char != " ") {
       str += char;
     } else break;
   }
   if (str.length == 0) return 0;
   console.log(str);

   let min = -2147483648;
   let max = 2147483647;
   let num = new Number(str);
   if (num <= min) return min;
   else if (num >= max) return max;
   else if (isNaN(num)) return 0;
   else return num;
 };
 function isValidOp(char) {
   let validChars = "-+.";
   if (validChars.indexOf(char) == -1) return false;
   else return true;
 }

 function isValidDigit(char) {
   let validChars = "1234567890";
   if (validChars.indexOf(char) == -1) return false;
   else return true;
 }

 function isValidChar(char) {
   let validChars = "+-.1234567890";
   if (validChars.indexOf(char) == -1) return false;
   else return true;
 }


console.log(myAtoi('        -12222 33333'))

// console.log(myAtoi('aaa        -42.001 with worjds'))
// console.log(myAtoi('-5a4'))

