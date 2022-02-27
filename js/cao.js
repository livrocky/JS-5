//1//

//function declaration//

// function myname() {
//   alert("Rokas");
// }
// myname();

// //function expression//

// const myname = function () {
//   alert("Rokas");
// };
// myname();

//2//

// function randomNumber(min, max) {
//   let random = Math.random();
//   random = random * max;
//   random = random + min;
//   random = Math.floor(random);
//   return random;
// }
// console.log(randomNumber(1, 5));

//3//

// function count(name, lname) {
//   const wcount = name + lname;
//   console.log(`${name}, ${lname} ===> ${wcount.length} letters`);
// }

// count("rokas", "ruzevicius");

//4//

// const letters = ["A", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// function abc(sk) {
//   let letter = letters[sk];
//   console.log(letter);
// }

// abc(5);

//5//

// function mathOperation(n1, n2) {
//   const operation = n1 + n2;
//   const n2 = operation - n1;
// }
// console.log(`dfdfgsd ${operation}`);
// mathOperation(1, 2);

// function mathOperation(n1, n2) {
//   const sum = n1 + n2;
//   console.log(`${n1}, ${n2}, "sum" ===> ${sum}`);
// }
// mathOperation(20, 2);

//6//

function randomNumber(min, max) {
  let random = Math.random(1, 10);
  random = random * max;
  random = random + min;
  random = Math.floor(random);
  return random;
}

console.log(randomNumber(1, 10));

function squareNum() {
  randomNumber ** 2;
}
squareNum();
