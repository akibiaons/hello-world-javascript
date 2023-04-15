const randomNums = [1, 123, 25, 90, 3543, 42];
 
const foundElement = randomNums.findIndex(num => num > 200);
// This code will output...
console.log(foundElement);

// Below I will be testing the .every() method before implementing it in a grammar checker program...
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true