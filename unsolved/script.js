
// 1. Write a function that logs 'Hello World!' to the console
// Write your code below this line

function greeting(){
    console.log('Hello World!');
}
greeting();

// 2. Write a function to calulate the area of an object
// Formula: area = length * width
// Write your code below this line

function area(height, width) {
    return height * width;
}

console.log(`area = ${area(10,20)}`);

// 3. Write a function to calculate the volume of an object
// Formula: length * width * height
// Write your code below this line

function volume(length,width,height) {
    return length * width * height;
}

console.log(`volume = ${volume(10, 20, 30)}`);

// 4. Write a function to calulate the final score of a Super Bowl football game
//Football Scoring System: touchdown = 6, fieldGoal = 3, twoPoint = 2, extraPoint = 1
// Write your code below this line

function superBowlScore(touchdown, fieldGoal, twoPoint, extraPoint) {
    return touchdown + fieldGoal + twoPoint + extraPoint
}

console.log(`SuperBowl score prediction: ${superBowlScore(3, 3, 0, 5)}`);

// Write your Bonus code below this line
