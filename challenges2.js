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