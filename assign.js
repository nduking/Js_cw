//even number
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
//odd number
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

//Question 3

let result = 99;
if (result === result % 2) {
  console.log(`${result} is an even number`);
} else {
  console.log(`${result} is an odd number`);
}

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than b`);
} else {
  console.log(`${b} is less than a`);
}

//Question 1
const myAge = 35;
let yourAge = prompt("Enter your age:");
// yourAge = Number(yourAge);

if (myAge > yourAge) {
  console.log(`I'm older by ${myAge - yourAge} years`);
} else if (yourAge > myAge) {
  console.log(`You are older by ${yourAge - myAge}`);
} else if (yourAge !== Number(yourAge)) {
  console.log("Please enter a number:");
}
// Alternative way

const myAge1 = 35;
let yourAgeInput = prompt("Enter your age:");
let yourAge1 = Number(yourAgeInput);

if (isNaN(yourAge)) {
  console.log("Please enter a valid number");
} else if (myAge > yourAge1) {
  console.log(`I'm older by ${myAge - yourAge1} years`);
} else if (yourAge > myAge) {
  console.log(`You are older by ${yourAge1 - myAge} years`);
} else {
  console.log("We are the same age!");
}