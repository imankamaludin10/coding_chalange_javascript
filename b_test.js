// function newAvg(arr, newavg) {
//     let avg = arr.reduce((acc, curr) => acc + curr, 0);
//         newavg = newavg * (arr.length+1);
//         result=newavg-avg;
//     if (result <= 0 ) throw 'Expected New Average is too low';
//     return Math.ceil(result);

// }

function newAvg(arr, newavg) {
  const x = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);
  if (x <= 0) throw "Expected New Average is too low";
  return Math.ceil(x);
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 3));
