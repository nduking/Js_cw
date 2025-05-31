// const myArray = ["items", "objects", "numbers"];

// console.table(myArray);

const countries = [
  "Nigeria",
  "Ghana",
  "Togo",
  "China",
  "Brazil",
  "England",
  "USA",
  "Niger",
  "Germany",
  "Spain",
];
// console.log("Countires:", countries);
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i]);
// }

// for (let i = 0; i < countries.length; i++) {
//   console.log(`country ${i + 1} is: ${countries[i]}`);
// }
countries.push("France", "Japan", "India");
// console.log(countries);
countries.pop();
console.log(countries);
countries.pop();
console.log(countries);

countries.unshift("india");
console.log(countries);

countries.shift();
console.log(countries);

countries.sort();
console.log(countries);

const number1 = [1, 2, 3];

const number2 = [4, 5, 6];

const arrMax = number1.concat(number2);
console.log(arrMax);

console.log(number1.indexOf(2));

console.log(countries.indexOf("France"));
console.log(countries.indexOf("India"));

console.log(countries.includes("France"));
