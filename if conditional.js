const age = 10;
if (age >= 18) {
  console.log(`user can enter the application because their age =${age}`);
} else {
  console.log(`user cannot enter the app because their age =${age}`);
}

const weather = `sunny`;
if (weather === `rainy`) {
  console.log(`The weather is currently ${weather} please use a raincoat`);
} else if (weather === `sunny`) {
  console.log(`The weather is currently ${weather} please use an umbrella`);
} else {
  console.log(`The weather is currently BALABLUE please enjoy your day`);
}

const day = "wednesday";
if (day === "monday") {
  console.log(`${day} is the first working day of the week`);
} else if (day === "tuesday") {
  console.log(`${day} is the secong working day of the week`);
} else if (day === "wednesday") {
  console.log(`${day} is the third day working day of the week`);
} else if (day === "thursday") {
  console.log(`${day} is the fourth working day of the week`);
} else if (day === "friday") {
  console.log(`${day} is the fifth working day of the week`);
} else if (day === "saturday") {
  console.log(`${day} weekend begins`);
} else if (day === "sunday") {
  console.log(
    `${day} is the last day of the weekend and a day to go and worship the lord`
  );
} else {
    console.log('What planet are you from?');
}
