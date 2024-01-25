// function hero(bullets, dragons) {
//   let result = false;

//   if (bullets >= dragons * 2) {
//     result = true;
//   }
//   return result;
// }

// ternari
// function hero(bullets, dragons) {
//     return (bullets >= dragons * 2) ? true : false ;
// }

// ternari truety / falsty..
// function hero(bullets, dragons) {
//   return bullets >= dragons * 2;
// }

const hero = (bullets, dragons) => bullets >= dragons * 2;

console.log(hero(100, 40));
