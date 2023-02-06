/*
- Loops allow for us to create a set of instructions to be run until a certain condition is met.
- Loops allow us developers to create scalable, manageable, and efficent JavaScript programs. 
*/

//LESSON 1: Repeating Tasks Manually
/*
- Before making loops we must understand that writing the same code over and over agin can vbe tiring as seen below:
*/

const cities = ['San Diego', 'Bakersfeild', 'San Fransisco', 'Los Angeles'];
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
console.log(cities[3]);
// Above I console.log(cities[index]); for each and every indexed element. This is a tiresome and non scalable way of programming with JavaScript.
// END OF LESSON 1: Repeating Tasks Manually.
//===================================================================================================================================================

// LESSON 2: The For Loop
/*
- Instead of writing code over and over like the example above, we can use a loop to repeat a given block of code on its own.
- The typical four loop contains an iterator variable that usually appears in all three expressions. 
- The iterator variable is initialized then checked against the stopping condition, and assigned a new value on each loop iteration. 
iterator variables can have any name, but it's best to use them with a descriptive variable. 
*/
// Below is an example for loop:
for (let counter = 0; counter < 4; counter++) {
  //console.log(counter);  
}; // See npx nodemon loopsnotes.js for the output
/* Breaking down the for loop above.
- The INITIALIZATION is ('let counter = 0'); so the loop will start counting at 0
- The stopping condition is counter < 4; which means that the loop will run as long as the iterator variable (counter) is less than 4
- The iteration statement is counter++. This means that the value of counter will increase by 1, which starts at 0 and so on.
- The code blocks inside the bracket will log to the console the value of the loop once it evaluates to false.
*/
for (let sample = 5; sample < 10; sample++) {
    //console.log(sample);
};
// I messed up by not commenting out the last excersises comments...it kept printing out the first for loop and the second for loop at the same time.
// END OF LESSON 2: The For Loop
//===================================================================================================================================================
//START OF LESSON 3: Looping in Reverse
/*
- What if we want to loop in reverse? We want the console to print out 3, 2, 1, 0?
- To run a for loop in reverse we must meet three conditions.

1.) The first is to set the iterator variable to the highest (max) value. 

2.) Second is to set the stopping condition for when the iterator variable is less than the desired amount.

3.) Third is to decrease the iterator after each iteration...
*/
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0  ; counter--){
    console.log(counter);
  };
// I wasn't adding the = to the >= in the code above so the exsercise didn't register as complete even though the console had logged the correct response.
// END OF LESSON 3: Looping in Reverse
//===================================================================================================================================================
// START OF LESSON 4: Looping Through Arrays
/*
- For loops can be used to loop over the same operation on each element in an array.
- Arrays hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increased 
the price of each item on the catalog, without a for loop through an array, this could result in many repeated lines of code.
SEE CODE Below for an example of looping through an array:
*/
const arrayExample = ['Element 0', 'Element 1', 'Element 2', 'Element 3'];
// In order to loop through an array, the for loop must use the array's .length property in its condition.
for (let i = 0; i < arrayExample.length; i++) {
    console.log(arrayExample[i]);
};
/*
- In the loop above the iterator is 'i'. A lot of loops use 'i' as a shorthand for index. 
- Notice the stopping condition checks to see if i is less than animals.length. 
*/
const vacationSpots = ['Paris', 'Beligum', 'France'];
for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`);
};
// END OF LESSON 4: Looping Through Arrays
//===================================================================================================================================================
// START OF LESSON 5: Nested Loops
/*
- Nested loops are usefull for comparing elements in two different arrays. They are loops within loops.
- Below is an example:
*/
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both arrays have the number: ' + yourArray[j]);
        }
    }
};