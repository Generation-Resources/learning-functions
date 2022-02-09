// 1. Write a function that logs 'Hello World!' to the console
// Write your code below this line
function helloWorld() {
    console.log('Hello World!');

}
helloWorld();



// 2. Write a function to calulate the area of an object
// Formula: area = length * width
// Write your code below this line
function calcArea(length, width) {
    let area = length * width;
    return area;

}







console.log(`area = ${calcArea(10,20)}`);

// 3. Write a function to calculate the volume of an object
// Formula: length * width * height
// Write your code below this line
function calcVolume(length, width, height) {
    let volume = length * width * height;
    return volume;
}





console.log(`volume = ${calcVolume(10, 20, 30)}`);

// 4. Write a function to calulate the final score of a Super Bowl football game
//Football Scoring System: touchdown = 6, fieldGoal = 3, twoPoint = 2, extraPoint = 1
// Write your code below this line
function superBowlScore(touchdown, extraPoint, twoPoint, fieldGoal) {
    let predictedScore = (touchdown * 6) + (extraPoint * 1) + (twoPoint * 0) + (fieldGoal * 3);

    return predictedScore;

}







console.log(`SuperBowl score prediction: ${superBowlScore(3, 3, 0, 5)}`);

// Write your Bonus code below this line
let bengalsScore = superBowlScore(3, 3, 0, 5);
let ramsScore = superBowlScore(0, 0, 0, 0);
let finalScore = (`Bengals: ${bengalsScore}  Rams: ${ramsScore}`);
console.log(finalScore);
//my solution
console.log(`Bengals: ${superBowlScore(3, 3, 0, 5)} Rams: ${superBowlScore(0, 0, 0, 0)} `);