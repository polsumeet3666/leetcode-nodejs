/**
 *
 * pair sum
 */

let arr = [-3,-1,0,1,2];
let sum = -2;

// complexity n^2
function printPairSum(arr, sum) {
  let pairFound = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        console.log(
          "🚀 ~ file: pair_sum.js ~ line 13 ~ printPairSum ~ arr[i]",
          arr[i],
          arr[j]
        );
        pairFound = true;
      }
    }
  }
  if (!pairFound) {
    console.log(
      "🚀 ~ file: pair_sum.js ~ line 20 ~ printPairSum ~ pairFound",
      pairFound
    );
  }
}
printPairSum(arr,sum);


// 2 pointer approach
function twoPointer(arr, sum) {
  arr = arr.sort((a,b)=> a-b);
  let lptr = 0,
    rptr = arr.length - 1;
  while (lptr < rptr) {
    if (arr[lptr] + arr[rptr] == sum) {
      console.log(
        "🚀 ~ file: pair_sum.js ~ line 40 ~ twoPointer ~ arr[lptr]",
        arr[lptr],
        arr[rptr]
      );
      return;
    } else if (arr[lptr] + arr[rptr] < sum) {
      lptr++
    } else {
      rptr--;
    }
  }
}
twoPointer(arr,sum);

// hashing  o(n)
let hashmap = new Map();
function printPariUsingHash(arr,sum){

    arr.forEach(element => {
        if (hashmap[(sum -element)]){
            console.log("🚀 ~ file: pair_sum.js ~ line 62 ~ printPariUsingHash ~ element", element,(sum-element))
            
        } else {
            hashmap[element] = true;
        }
    });

}
printPariUsingHash(arr,sum);