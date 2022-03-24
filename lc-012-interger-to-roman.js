// https://leetcode.com/problems/integer-to-roman/
/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {


  let nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let char =['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let index = 0;
  let str = ''
  while(num>0) {
    while (num >= nums[index]){
      str+=char[index];
      num -= nums[index];
    }
    index++;
  }
  return str;
};

console.log(intToRoman(3549));