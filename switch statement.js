/*
let day = "monday";

switch (day) {
  case "monday":
    console.log("Start of the week");
    break;
  case "tuesday":
    console.log("It's Tuesday!, the second working day of the week");
    break;
  case "wednesday":
    console.log("It's wednesday!, the third working day of the week");
    break;
  case "thursday":
    console.log("It's thursday!, the fourth working day of the week");
    break;
  case "friday":
    console.log("It's friday!, the last working day of the week");
    break;
  case "saturday":
    console.log("It's saturday!, the begining of the weekend");
    break;
  case "sunday":
    console.log(
      "It's sunday!, the reserve day to give thanks and praise to the lord"
    );
    break;
  default:
    console.log("This input is not a valid day of the week");
    break;
}
*/

let score = 85;
let message;

switch (true) {
  case score >= 90:
    message = "You got an A!. Execellent";
    break;
  case score >= 80:
    message = "You got an B!. Very Good";
    break;
  case score >= 70:
    message = "You got an C!. Pass";
    break;
  case score >= 60:
    message = "You got an D!. You barley Pass";
    break;

  default:
    message = "You got E!. You failed ";
    break;
}
console.log(message);
console.log(`Your Score ${score} means: ${message}`);
