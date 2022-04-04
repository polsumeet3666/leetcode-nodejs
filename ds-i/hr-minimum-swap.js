// let arr = [7, 1, 3, 2, 4, 5, 6];
let arr = [4, 3, 1, 2];

function minimumSwaps(arr) {
  let sortedArr = Array.from(arr).sort((a, b) => a - b);
  let map = createIndexMap(arr);

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      sortedArr.sort((a, b) => a - b);
      let j = indexOf(map, sortedArr[i]);
      // let j = indexOfV2(arr, sortedArr[i]);
      // console.log(j,j1,'---')
      map.set(arr[i], j);
      map.set(arr[j], i);
      swap(arr, i, j);
      count++;
    }
  }
  // console.log(count);
  return count;
}

function createIndexMap(arr) {
  let map = new Map();
  arr.map((v, i) => {
    map.set(v, i);
  });
  // console.log(map);
  return map;
}
function indexOf(map, element) {
  // let index = -1;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == element) {
  //     index = i;
  //   }
  // }
  // return index;
  return map.get(element);
}
function indexOfV2(map, element) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      index = i;
    }
  }
  return index;
}

function swap(arr, i, j) {
  // console.log(i,j)
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(minimumSwaps(arr));
