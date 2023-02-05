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
  console.log(counter);  
}; // See npx nodemon loopsnotes.js for the output
/* Breaking down the for loop above.
- The INITIALIZATION is ('let counter = 0'); so the loop will start counting at 0
- The stopping condition is counter < 4; which means that the loop will run as long as the iterator variable (counter) is less than 4
- The iteration statement is counter++. This means that the value of counter will increase by 1, which starts at 0 and so on.
- The code blocks inside the bracket will log to the console the value of the loop once it evaluates to false.
*/