// PART 1: Introduction to Objects in JavaScript
/*
- Objects are the most basic structure that permeates nearly every aspect of JavaScript.
- At their core, objects are containers storing related data and functionality.
*/
// Start of Lesson 1: Creating Object Literals
/*
- Objects can be assigned to any variable type and we use {} brackets to assign an object literal.
- We then fill an object with unordered data that is organized by key-value pairs.
Below is an example of an object literal being created:
*/
let spaceShip = {
    'Rocket': 'Turbo Fuel',
    color: 'silver'
};
//console.log(spaceShip);
// END of Lesson 1: Creating Object Literals
//================================================================================================================================
// Start of Lesson 2: Accessing Properties
/*
There are two ways to acess an object properties.
    - The first way is through the dot notation method.
      Dot notation is a method that we have learned earlier in the course.
*/
    'hello'.length; // This is an example of the dot notation method.
/*
With the dot notation method we just write the objects name followed by the key name. 
Below is an example of the dot notation method:
*/
let tesla = {
    model: 'Model 3',
    color:'gray'
};
//console.log(tesla.model); // Is an example of using the dot notation with an object and it'll return 'Model 3' to the console.
//console.log(tesla.color); // Is an example of using the dot notation with an object and it'll return 'gray' to the console.
// Below is an exersise where we use dot notation to call upon an object's properties.
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: '5 Members',
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  // Below will be a variable called crewCount that is equal to the numCrew property..
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;
  //console.log(crewCount, planetArray);
  // END of Lesson 2: Accessing Properties
  //=================================================================================================================================
  // Start of Lesson 3: Bracket Notation
  /*
  The second way to access an object's properties is through the bracket notation.
    - Bracket notation was what we previously used when indexing arrays. 
  */
  ['A', 'B', 'C'][0]; //This here will return 'A'  
  /*
  To use bracket notation to access an objects property (key) we will pass
  in the key as a string.
  */
 spaceShip['Fuel Type'];

 /*
 Here are a few things to remember when using bracket notation:
   - We MUST use bracket notation to access keys that have numbers, spaces, or special characters in them.
   - We will get an error, see below and open console for more information
 */
let fordShip = {
    'Fuel Type': 'Jet Disel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};
fordShip['Fuel Type']; // Returns 'Jet Disel'
fordShip['Active Mission']; // Returns 'True'
fordShip['homePlanet']; // Returns 'Earth'
fordShip['numCrew']; // Returns '5'

let isActive = fordShip['Active Mission'];
console.log(isActive); // Returns 'True'

/*
With bracket notation, we can also use a variable insde of the bracket to select the 
- keys of an object. 
Take a look at this function below to see an example:
*/
let returnAnyProp = (object, property) =>
object[property];

returnAnyProp(spaceShip, 'homePlanet'); // Returns 'Earth'