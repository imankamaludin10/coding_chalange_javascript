// https://www.codewars.com/kata/5264d2b162488dc400000001

// function spinWords(string) {
//     let splitString = string.split(' ');
//     let arayString = [];

//     for (let i = 0; i < splitString.length; i++) {
//         let newString = splitString[i];
//         if (splitString[i].length >= 5) {
//             newString = splitString[i].split('').reverse().join("");
//         }
//         arayString.push(newString);

//     }

//     return arayString.join(" ");

// }

// function spinWords(words) {
//   return words
//     .split(" ")
//     .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
//     .join(" ");
// }

const spinWords = (words) =>
  words
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");

console.log(spinWords("Hey fellow warriors"));
