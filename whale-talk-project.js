/* 
This project will be an english to whale talk translator...

- We will use loops and arrays to create this language translator.
*/
// First we will make a varible named input equal to any string we like.
let input = 'I like latinas!';
// Step two will have us create an array named vowles to hold the 'a, e, i, o, u' vowles spoken by whales..
let vowles = ['a', 'e', 'i', 'o', 'u'];
// Next will be an empty array which we will transfer the translated string to...
let resultArray = [];
// The next step will be to iterate a loop through the input variable text 
for (let i = 0; i < input.length; i++) {
    //console.log(input[i]);
    if (input === 'e') {
        console.log(resultArray.push(input[i]));
    }
    if (input === 'u') {
        console.log(resultArray.push(input[i]));
    }
    for (let j = 0; j < vowles.length; j++) {
        //console.log(vowles[j]);
        if (input[i] === vowles[j]){
            console.log(resultArray.push(input[i]));
        }
    }
}
console.log(resultArray);