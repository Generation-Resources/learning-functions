// 1. Write a function that logs 'Hello World!' to the console
// Write your code below this line

function helloWorld() {
  console.log("hello world");
}
helloWorld();
// 2. Write a function to calulate the area of an object
// Formula: area = length * width
// Write your code below this line

function area(length, width) {
  return length * width;
}
console.log(`area = ${area(10, 20)}`);

// 3. Write a function to calculate the volume of an object
// Formula: length * width * height
// Write your code below this line

function volume(length, width, height) {
  let newVolume = length * width * height;
  return newVolume;
}

console.log(`volume = ${volume(10, 20, 30)}`);

// 4. Write a function to calulate the final score of a Super Bowl football game
//Football Scoring System: touchdown = 6, fieldGoal = 3, twoPoint = 2, extraPoint = 1
// Write your code below this line
function superBowlScore(touchDown, fieldGoal, twoPoint, extraPoint) {
  return (touchDown * 6) + (fieldGoal * 3) + (twoPoint * 2) +( extraPoint * 1);
}

console.log(`SuperBowl score prediction: ${superBowlScore(3, 5, 0, 3)}`);

// Write your Bonus code below this line
console.log(
  `SuperBowl score prediction for Seahawks: ${superBowlScore(4, 4, 6, 5)}`
);
console.log(
  `SuperBowl score prediction for Packers: ${superBowlScore(4, 3, 6, 5)}`
);
