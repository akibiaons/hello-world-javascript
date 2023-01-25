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
// You can also access specific characters in a string using bracket notation and the index 