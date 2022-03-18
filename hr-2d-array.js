function createArray(row, col) {
  let array = Array.from(Array(row), () => new Array(col).fill(0));
  console.log(
    "🚀 ~ file: hr-2d-array.js ~ line 3 ~ createArray ~ array",
    array
  );
  return array;
}

let r = 6,
  c = 6;
// let arr = createArray(r, c);
// let arr = [
// [1,2,3,4,5,6],
// [7,8,9,10,11,12],
// [13,14,15,16,17,18],
// [19,20,21,22,23,24],
// [25,26,27,28,29,30],
// [31,32,33,34,35,36]]
let max = -100
// let arr = [
// [1,1,1,0,0,0],
// [0,1,0,0,0,0],
// [1,1,1,0,0,0],
// [0,0,2,4,4,0],
// [0,0,0,2,0,0],
// [0,0,1,2,4,0]
// ]
let arr = [
    [-1,-1,0,-9,-2,-2],
[-2,-1,-6,-8,-2,-5],
[-1,-1,-1,-2,-3,-4],
[-1,-9,-2,-4,-4,-5],
[-7,-3,-3,-2,-9,-9],
[-1,-3,-1,-2,-4,-5],

]
iterateOnArray(arr);

// let max = 0;
function iterateOnArray(arr) {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
     // console.log(i, j);
      printHourGlass(arr, i, j);
    }
  }
  console.log(max);
  return max;
}

function printHourGlass(arr, i, j) {
  let start = { x: i, y: j };
  let end = { x: i + 3, y: j + 3 };

  if (end.x > r || end.y > c){
      return;
  }

  let hr = [];
  for (let k = start.x; k<end.x;k++){
      for (let l= start.y;l<end.y;l++){
        hr.push(arr[k][l]);
      }
  }
  let sum = hr.reduce((previous,current,index)=>{
    if (index !=3 && index!= 5)
        return previous+current;
    
    return previous
  },0);

  console.log(hr,sum);

  if (sum >max){
      max= sum;
  }
}
