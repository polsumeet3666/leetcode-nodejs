// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  const result = [];
  for (let i = 0; i <= rowIndex; i++) {
    const res = binomialCoefficent(rowIndex, i);
    result.push(res);
  }
  return result;
};

function binomialCoefficent (line, i) {
  const result = parseInt(
    factorial(BigInt(line)) / (factorial(BigInt(line) - BigInt(i)) * factorial(BigInt(i)))
  );
  return result;
}

function factorial (num) {
  let result = BigInt(1);
  while (num > 0) {
    result *= BigInt(num);
    num--;
  }
  return result;
}
console.log(getRow(4));

// console.log(factorial(BigInt(24)));
// console.log(factorial(24-1));
// console.log(factorial(1));
// console.log(binomialCoefficent(BigInt(24),1))