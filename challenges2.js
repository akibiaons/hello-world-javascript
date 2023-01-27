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
Below will be more JavaScript part one challenges....

- This next challenge below will have me printing all numbers from 0 - 10...
*/
const randomNumberto10 = (num) => { 
    return Math.floor(Math.random() * 10);
};
console.log(randomNumberto10()); // Will print a random number between 0 - 10