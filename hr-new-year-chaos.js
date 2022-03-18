//  let q = [2,1,5,3,4];

//  let q = [2,5,1,3,4];

 let q = [1,2,5,3,7,8,6,4];
// let q = [5,1,2,3,7,8,6,4]

// function minimumBribes(q) {
//     let totalBribes = 0;
//     try {
//       for (let i = 0; i < q.length; i++) {
//         let bribes = 0;
//         for (let j = i + 1, k = q[i]-1; j < k || j == k; j++, k--) {
//           //   console.log(i,j,k,q[i],q[j],q[k])
//           if (q[i] > q[j]) {
//             //   console.log(q[i],q[j])
//             bribes++;
//           }
//           if (q[i] > q[k] && q[k] != q[j]) {
//             // console.log(q[i],q[k])
//             bribes++;
//           }
//           if (bribes > 2) {
//             // console.log(q[i],bribes)
//             throw new Error();
//           }
//         }

//         totalBribes += bribes;
//       }
//       console.log(totalBribes);
//     } catch (err) {
//       console.log("Too chaotic");
//     }
    
// }



function minimumBribes(q) {
  let totalBribes = 0;
  try {
    for (let i = 0; i < q.length; i++) {
      let bribes = 0;
      if (q[i] != q[i]+1) {
        let index =  q[i]-1;
        bribes = index - i;
         console.log(q[i],q[i]+1,bribes)
      }
      if (bribes>2){
        throw new Error();
      } else  {
        totalBribes += bribes;

      }
    }
    console.log(totalBribes);
  } catch (err) {
    console.log("Too chaotic");
  }
  
}
minimumBribes(q)