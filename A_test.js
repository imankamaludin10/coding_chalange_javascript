// function evenOrOdd(number) {
// let result = 'Even';
//     number = number*number;
//     if (number % 2 == '1') result = 'Odd';
//   return result;

// }

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(-42));
