// function getCount(str) {
//   let vocal = "aiueo";
//   let count = 0;
//   for (let char of str) {
//     if (vocal.includes(char)) count++;
//   }
//   return count;
// }

// function getCount(str) {
//   return (str.match(/[aeiou]/ig) || []).length;
// }

function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}
console.log(getCount("abracadabra"));
