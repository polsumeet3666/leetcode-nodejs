// https://leetcode.com/problems/regular-expression-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function (s, p) {
   let prevOpStar = false;
   let pArr = convertPattern(p);
   let j = 0;
   let i = 0;
   let countOfFix = 0;
   let variableChar =false;
   for (i = 0; i < pArr.length; i++) {
     let cur = pArr[i];
     if (cur.length == 1 && cur.charCodeAt(0) >= 97 && cur.charCodeAt(0) <= 122)
       countOfFix++;
      else variableChar = true; 

     if (prevOpStar && cur == "." && s[j - 1]) {
       //j++;
       prevOpStar = false;
     } else if (cur == "." && s[j]) {
       j++;
     } else if (cur == "." && s[j] == undefined) {
       return false;
     } else if (cur == ".*") {
       j++;
       let subChar = s[j] ? s[j] : "";
       while (s[j] == subChar) {
         j++;
       }
       prevOpStar = true;
     } else if (cur.length == 2) {
       let subChar = cur[0];
       while (s[j] == subChar) {
         j++;
       }
       prevOpStar = true;
     } else if (cur == s[j]) {
       j++;
     } else if (prevOpStar && cur == s[j - 1]) {
       prevOpStar = false;
       //j++;
     } else return false;
   }

   if (i == pArr.length && s.length >= countOfFix) {
    if (variableChar== false && s.length == countOfFix) return true 
    else if (variableChar == true && s.length >= countOfFix) return true
    else return false
   } else return false;
 };

function convertPattern(p) {
  if (p.length == 1) return [p];

  let result = [];
  for (let i = 0; i < p.length - 1; i++) {
    if (p.charCodeAt(i) >= 97 && p.charCodeAt(i) <= 122) {
      if (p.charAt(i + 1) == "*") {
        result.push(`${p.charAt(i)}${p.charAt(i + 1)}`);
        i++;
      } else {
        result.push(p.charAt(i));
      }
    } else if (p.charAt(i) == "." && p.charAt(i + 1) == "*") {
      result.push(`${p.charAt(i)}${p.charAt(i + 1)}`);
      i++;
    } else result.push(p.charAt(i));
  }

  if (p.charAt(p.length - 1) != "*") {
    result.push(p.charAt(p.length - 1));
  }
  return result;
}


// console.log(isMatch('aaa','a*a'))
// console.log(isMatch('a','ab*c'))
// console.log(isMatch('a','ab*a'))
// console.log(isMatch('aaa','ab*ac*a'))
// console.log(isMatch('a','.*'))
// console.log(isMatch('ab','.*..'))
console.log(isMatch("mississippi","mis*is*ip*."));
// console.log(isMatch("aa","a"));


