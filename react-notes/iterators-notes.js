const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
// End of example 1, about iterators
//============================================================================================================================
// start of lesson 2 The .forEach method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruitType => console.log('I want to eat a ' + fruitType));
// end of lesson 2 The .forEach method
//============================================================================================================================
// Start of Lesson 3: The .map() method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
  return animals[0 * 9];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers / 100;
});

console.log(smallNumbers);
console.log(bigNumbers);
// End of Lesson 3: The .map() method
//===============================================================================================================================   
// Start of Lesson 4: The .filter() method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const SmallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWords => {
  return favoriteWords.length > 7;
});

console.log(randomNumbers);
console.log(smallNumbers);
console.log(favoriteWords);
console.log(longFavoriteWords);
// End of lesson 4: The filter method
//================================================================================================================================
//Start of Lesson 5: The .findIndex() method
const Animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(num => {
  return num === 'elephant';
});

const startsWithS = animals.findIndex(letter => {
  return letter[0] === 's';
});
// This was a beast exercise...The second challenge had me reaching to the depths of hell to find a solution.
// End of Lesson 5: The .findIndex method 
//================================================================================================================================
// Start of Lesson 6: The .reduce() method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);
// End of Lesson 6: The .reduce() method
//================================================================================================================================
// Start of Lesson 7: Iterator Documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it
console.log(interestingWords.every((word) => { 
  return word.length > 5;
} ));
// End of Lesson 7: Iterator Documentation 