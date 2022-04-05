// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {

  intervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const [ps, pe] = intervals[i - 1];
    const [cs, ce] = intervals[i];

    if (pe >= cs || ce <= ps) {
      let ns = Math.min(ps, cs);
      let ne = Math.max(pe, ce);
      intervals[i - 1] = [];
      intervals[i] = [ns, ne];
    }
  }
  return intervals.filter((val) => val.length > 0);
};

// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// const intervals = [[1,4],[4,5]]
// const intervals = [[0,4],[1,4]]
const intervals = [[1,4],[0,0]];
console.log(merge(intervals));
