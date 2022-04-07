// https://leetcode.com/problems/non-overlapping-intervals/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 1) return 0;
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let [ts, te] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [cs, ce] = intervals[i];
    if (te > cs) {
      count++;
      continue;
    }
    te = ce;
  }
  return count;
};

// const intervals = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3],
// ];

// const  intervals = [[1,2],[1,2],[1,2]];
const intervals = [[1,100],[11,22],[1,11],[2,12]];
console.log(eraseOverlapIntervals(intervals));
