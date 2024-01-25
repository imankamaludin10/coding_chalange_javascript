// cara biasa
// function grow(x){
//     let result = x[0];

//     for(let i = 1; i < x.length; i++){
//         result *= x[i];
//     }
//     return result;
// }

// reduce higher order function
// function grow(x){
//     return result = x.reduce((acc, curr) => acc * curr, 1);
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr);

// const grow=x=>eval(x.join("*"))

console.log(grow([2, 2, 2, 2, 2, 2]));
