
// 1. Write a function that logs 'Hello World!' to the console
// Write your code below this line
function greeting(){
    console.log('Hello World')
}


// 2. Write a function to calulate the area of an object
// Formula: area = length * width
// Write your code below this line
function Findarea(length,width){
    let area = length * width;
    return area;
}





console.log(`area = ${Findarea(10,20)}`);

// 3. Write a function to calculate the volume of an object
// Formula: length * width * height
// Write your code below this line

function findVolume(length,width,height){
    let  volume = length * width * height; 
    return volume;
}



console.log(`volume = ${findVolume(10, 20, 30)}`);

// 4. Write a function to calulate the final score of a Super Bowl football game
//Football Scoring System: touchdown = 6, fieldGoal = 3, twoPoint = 2, extraPoint = 1
// Write your code below this line
function findFinalScore(touchdown,fieldGoal,twoPoint,extraPoint){
    let score = (touchdown*6)+(fieldGoal*3)+(twoPoint*2)+(extraPoint*1);
    return score;
}






console.log(`SuperBowl score prediction: ${findFinalScore(3, 3, 0, 5)}`);

// Write your Bonus code below this line
