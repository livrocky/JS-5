"use strict";

// const numbersArray = ["2", "12", "33", "-7", "28", "49", "-17", "19", "42", "-14", "-10", "20"];

//                     0    1     2     3     4     5       6    7      8     9
const numbersArray = ["2", "12", "33", "-7", "28", "49", "-17", "19", "42", "-14", "-10", "20"];
//10    11//

let total = 0;
//ciklas//
// total = numbersArray[0] * 2;
// total = numbersArray[1] * 2;
// total = numbersArray[2] * 2;
// total = numbersArray[3] * 2;
// total = numbersArray[4] * 2;
// total = numbersArray[5] * 2;
// total = numbersArray[6] * 2;
// total = numbersArray[7] * 2;
// total = numbersArray[8] * 2;
// total = numbersArray[9] * 2;
// total = numbersArray[10] * 2;
// total = numbersArray[11] * 2;

//padaugint is 2//

for (let i = 0; i < 12; i++) {
  total += numbersArray[i] * 2;
}
console.log(`total===`, total);

//pakelt kvadratu//

// for (let i = 0; i < 12; i++) {
//   total += numbersArray[i] ** 2;
// }
// console.log(`total===`, total);

// padauginti is index 0//

// for (let i = 0; i < 12; i++) {
//   total += numbersArray[i] * numbersArray[0];
// }
// console.log(`total===`, total);

// atrinkti tiktai teigiamu elementu masyva//

for (let i = 0; i < 12; i++) {
  total = numbersArray[i] > 0;
}
console.log(`total===`, total);
