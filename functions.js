// functions with parameters

function addTwoValues(a, b) {
  let result = a + b;
  console.log(result);
}
addTwoValues(10, 20);
addTwoValues(100, 2000);
addTwoValues("100", 2000);
addTwoValues();
//2.
/*
function addTwoValueV2(){
    let result = 10 + 20;
    console.log(result);
}*/

function dividingTwoValue(c, d) {
  let result = c / d;
  console.log(result);
}

dividingTwoValue(100, 10);
dividingTwoValue(100, 4);

function dividingTwoValue(c, d) {
  return (result = c / d);
}
console.log(dividingTwoValue(100, 4));

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

function calcAverage(a, b, c) {
  return (result = (a + b + c) / 3);
}
console.log(calcAverage(3, 4, 5));

const calAvg = (e, f, g) => (e + f + g) / 3;
console.log(calAvg(8, 9, 10));
