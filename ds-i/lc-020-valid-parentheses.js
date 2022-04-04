// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
   let pair = {
     "}": "{",
     ")": "(",
     "]": "[",
   };
   let stack = [];
   for (let i = 0; i < s.length; i++) {
     let char = s.charAt(i);
     if (isOpening(char)) {
       stack.push(char);
     } else if (isClosing(char) && peek(stack) == pair[char]) {
       stack.pop();
     } else return false;
   }

   if (stack.length == 0) return true;

   return false;
 };

 function peek(stack) {
   return stack[stack.length - 1];
 }

 function isOpening(char) {
   let opening = "({[";
   if (opening.indexOf(char) == -1) return false;

   return true;
 }
 function isClosing(char) {
   let closing = ")}]";
   if (closing.indexOf(char) == -1) return false;

   return true;
 }

console.log(isValid('((())'));