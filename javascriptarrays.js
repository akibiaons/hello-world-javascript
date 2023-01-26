// WILL BE CREATING MY FIRST ARRAY
/* 
One way to create an array is by using an array literal 
an array literal creates an array that is surrounded by
these brackets --> [].
- Arrays just hold data types. 
- Arrays can hold the same or different data types.
*/
['element example', 10, true] // element example, 10, and true are all individual array elements.

// An array can also be shared to a variable as seen below:
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);
// END OF LESSON ONE 
//=========================================================================================================

// START OF LESSON TWO: ACCESSING ELEMENTS

/*

- Each element has an 'index' which is some sort of reference point based on its position
in the function. Elements can be accessed based on their index.

JavaScript arrays are 0 indexed meaning that they start at 0 rather than 1.

Below is an example with comments:
*/
let cities = ['New York' /*New York is index 0*/, 'San Francisco'/*SF is index 1*/, 'Chicago'/*Chicago is index 2*/];
cities[0] // 0 is an index number which contains the string 'New York'...
// You can also access specific characters in a string using bracket notation and the index.
const hi = 'Hello World';
console.log(hi[6]);
// Output: W, If i add spacing and , it will pick them up as characters too...

// END OF LESSON TWO: ACCESSING ELEMENTS
//==========================================================================================================================================

// START OF LESSON THREE: UPDATE ELEMENTS....
/*
- In the previous lesson I learned how to call the elements within an Array...
- Once access is given you can change the value of the element from outside of the codeblock...
*/
const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
console.log(seasons[2]); //Output is Summer...
console.log(seasons[2] = 'Nuclear Winter'); //Output will be Nuclear Winter...
// In the code above I printed the original array element value then switched it by making it equal to another string...
// END OF LESSON THREE: UPDATE ELEMENTS....
//==============================================================================================================================================================================
// START OF LESSON FOUR: ARRAYS with LET and CONST...
/* 
- Variables, such as let and const can be declared and assigned to an array.
- Elements with an array that have been delcared with a const keyword can be changed. However, the array itself
can not be assigned a new value.
- Pay close attention to the utencils and condiments array below ---->>>>
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha', ];
// The first step is to reassign index[0] = 'Mayo' then print out the entire array with the .log() method...
condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

let utencils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];