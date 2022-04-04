// https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;

  let arr = [],
    cur = 0;
  (counter = 0), (incr = true);
  for (let i = 0; i < s.length; i++) {
    if (arr.length < 0 || arr[cur] == undefined) {
      arr[cur] = [];
    }
    arr[cur].push(s.charAt(i));
    if (incr) cur++;
    else cur--;

    counter++;
    if (counter == numRows - 1) {
      incr = !incr;
      counter = 0;
    }
  }
  let str = "";
  for (let i = 0; i < numRows; i++) {
    if (arr[i]) {
      str += arr[i].join("");
    }
  }
  return str;
};
let s = "abcd",
  n = 2;
console.log(convert(s, n));
