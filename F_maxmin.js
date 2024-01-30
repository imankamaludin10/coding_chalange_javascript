function sumArray(array) {
  // let result = [];
  // let max = Math.max(...array);
  // let min = Math.min(...array);

  // result = array.reduce((acc, curr) => acc * curr,0);
  // return result;

  // cek is null or empty array
  // if  (!Array.isArray(array) || array.length <= 0) return  0;
  if (!Array.isArray(array) || array.length <= 0) return 0;
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const max = Math.max(...array);
  const min = Math.min(...array);
  if (sum == min || sum == min) return 0;
  return sum - (max + min);

  // sum 11
  // min -12
  // max 20
  // if (!Array.isArray(array) || array.length <= 1) {
  //     return 0;  // Return 0 for invalid input
  // }
}

console.log(sumArray([3]));
