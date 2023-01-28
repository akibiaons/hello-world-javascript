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

//The next step will be to reassign the last element in the utensils to a value of 'Spoon'
let utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = 'Spoon';
console.log(utensils);
//END OF LESSON FOUR: ARRAYS WITH LET AND CONST.....
//==============================================================================================================================================================================
// START OF LESSON 5: THE .LENGTH PROPERTY
/* 
- One of an array's built in objects is the .length() proeprty, which returns the number of items in the array. 
- The length property is activated by using the dot '.' operator, same way we do with strings..
*/
const newYearsResolutions1 = ['Get 10% Bodyfat', 'Journal Daily'];

console.log(newYearsResolutions1.length);
// Output: 2 
/*
- We use the dot notation, chaining a '.' period with the property name to the array to access the length property of the new years resolution array
- We also log length of the new years resolution to the console
- The output is two since our array only has two elements...
*/
//END OF LESSON 5: THE .length PROPERTY
//==============================================================================================================================================================================
// START OF LESSON 6: THE .push() METHOD 
/*
- The .push() method is used to add additional elements to the end of the array.
- Below we will access the .push() method with '.' notation and connect push to item tracker 
- We then call the .itemtracker much like a function.
- .push() can take in one to multiple arguments...
- .push() can really mutate an array by adding elements to it as seen below:
*/ 
const chores = ['do dishes', 'javascript syntax', 'clean clothes'];
console.log(chores); // will print the 3 strings in the array above...

chores.push('got to gym at 5am', 'go to work at 3pm');
console.log(chores); // Will print out ['do dishes', 'javascripr syntax', 'clean clothes', 'got to gym at 5am', 'go to work at 3pm']
// END OF LESSON 6: THE PUSH .push() METHOD
//==============================================================================================================================================================================
// START OF LESSON 7: The .pop() Method
/*
- .pop() does sort of the opposite of .push() as it removes the last item of an array.
*/
const newItemTracker = ['item 0', 'item 1', 'item 2'];
// Above we declare a const variable newItemTracker to assign to an array...
const removed = newItemTracker.pop();
// Above we create a removed const variable assigned to newItemTracker.pop() to retain the items that were popped out of the array...
console.log(newItemTracker);
// Above we print the newItemTracker array which shows ['item 0', 'item 1'] no longer having item 3...
console.log(removed);
// Item 3 is shown since we assigned a variable to the popped items...
// END OF LESSON 7: THE POP .pop() METHOD
//==============================================================================================================================================================================
// START OF LESSON 8: More Array Methods
/*
 - There are many more array methods avaliable on the MDN JavaScript documentation...
 - .pop() and .push() mutate the arrays on which they are called, but sometimes you may not want to mutate the array.
 - Below I will use the .slice() method to quickly take out a few items from the groceryItem array.
*/
const groceryItem = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryItem.slice(1, 4, 5, 6));
// In the two lines above I used the .slice() method to remove all items that were not bananas, coffee beans, or brown rice
// The .slice() method uses the indexed # to take out cetrain elements...