/*
This file will contain some simple beginner function challenges.
*/
//======================================================================================================================================================
// Below I will write a function that takes in a stirng and returns the number of vowles in the string.
function countVowel (string) {
    // Find the count of vowles 
    const count = string.match(/[aeiou]/gi).length;
    //Return the number of vowles...
    return count;
}
// The function below will print a word
function vowles1 (word1) {
    return `${word1}`;
}
console.log(vowles1(countVowel('Arthur')));
// The function above makes it so that a string can be returned...
// For the vowel counter challenge, I needed to get some help off of Google, since I didn't completly understand how to use the function to build my own 
// -vowel counter...

// Below is an example of calling an array with a specific string..Like in excersise two of javascriptarrays.js
let bodyWeight = ['160', '200', '170', '180'];
console.log(bodyWeight[0]); // Should output 160
// Now the next one will just call 6
let bodyWeight1 = 'The man weighs 160lbs';
console.log(bodyWeight1[0]);
// So in the code above, I didn't have the string in the [] array box, wtf...

/*
Below will be more JavaScript part one challenges....on day 1/27/23.....

- This next challenge below will have me printing all numbers from 0 - 10...
*/
const randomNumberto10 = (num) => { 
    return Math.floor(Math.random() * 10);
};
console.log(randomNumberto10()); // Will print a random number between 0 - 10

// The second challenge of the day is to print a multiplication table...
console.log('Multiplication Table for 1 - 10 Is Below');

// let subjectNumber = 10 //This can be changed to any number from 1 - 10;
const multiplierBox = (subjectNumber, multiplier) => {
    return `${subjectNumber} * ${multiplier} = ` + subjectNumber * multiplier;
};
console.log(multiplierBox(137, 28)); // Change the values in the (#,#) to use the calculator...
// END OF DAILY CHALLENGE 1/28/23....

// Start of daily challenge 1/29/23
// Today I will be making a length converter function to take kilometers and convert them to miles
// One mile = 1.60 kilometers....
// const miles = 2; // The amount of miles to be converted
const milesToKilometers = (miles) => {
    return Math.floor(miles * 1.60);
};
console.log(milesToKilometers(10)); // Should output 16
// End of daily challenge 1/29/23

// Below I will write out a function that prints out even numbers from 1 - 10

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printNum = (num) => {
    if (num === 2 && num === 4 && num === 6 && num === 8 && num === 10) {
        return `${num}`;
    }
};

const whales = ['Sperm Whale', 'Orca Whale', 'Great White Shark'];