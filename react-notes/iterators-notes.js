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
