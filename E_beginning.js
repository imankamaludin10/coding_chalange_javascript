// https://www.codewars.com/kata/659af96994b858db10e1675f

// function beginning(sequence) {
//     for (let i = 1; i < sequence.length; i++) {
//         const firstNumberStr = sequence.slice(0, i);

//         const firstNumber = parseInt(firstNumberStr);

//         let currentNumber = firstNumber;
//         let restOfSequence = sequence.slice(i);

//         while (restOfSequence.startsWith((currentNumber + 1).toString())) {
//             currentNumber += 1;
//             restOfSequence = restOfSequence.slice(String(currentNumber).length);

//             if (restOfSequence.length === 0) {
//                 return firstNumber;
//             }
//         }
//     }

//     return parseInt(sequence);
// }

function beginning(xs) {
  // Try different lengths for the first number
  for (let length = 1; length <= xs.length; length++) {
    let firstNumber = parseInt(xs.substring(0, length));
    let testStr = firstNumber.toString();
    let currentNumber = firstNumber;

    // Build the sequence
    while (testStr.length < xs.length) {
      currentNumber++;
      testStr += currentNumber;
    }

    // Check if the sequence matches the input string
    if (testStr === xs) {
      return firstNumber;
    }
  }
  return -1; // Return -1 if no sequence is found
}
console.log(beginning("17181920"));
