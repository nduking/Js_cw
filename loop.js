/*for (let i = 1; i <= 5; i++) {
  console.log(i);
}*/

/*for (let i = 5; i >= 1; i--) {
  console.log(i);
}*/
/*
for (let i = 1; i <= 25; i++) {
  console.log(i);
}

for (let i = 25; i >= 1; i--) {
  console.log(i);
}

let coding = ["Javascript", "python", "php", "react", "c++"];
for (let i = 1; i < coding.length; i++) {
  console.log(coding[i]);
}
*/
//while loop

/*let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
*/
//do ...while loop
/*let i = 1;
do {
  console.log(i);
  i--;
} while (i >= 5);
*/

//even number
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
//odd number
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

let myAge = 35;
let yourAge = prompt("Enter your age:");

if (myAge > yourAge) {
  console.log(`Our age difference is ${myAge - yourAge}which means i'm older`);
} else {
  console.log("Your are older");
}
