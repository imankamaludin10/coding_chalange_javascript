// function bilangan(x) {
//   const result = [];
//   for (let i = 1; i < x; i++) {
//     if (i%3===0 || i%5===0) result.push(i);
//   }
//   return result.reduce((a,b)=>a+b,0);
// }

// function bilangan(number){
//     return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
//   }

const bilangan = (number) =>
  number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
console.log(bilangan(10));
