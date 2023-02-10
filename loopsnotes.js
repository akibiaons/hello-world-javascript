/*
- Loops allow for us to create a set of instructions to be run until a certain condition is met.
- Loops allow us developers to create scalable, manageable, and efficent JavaScript programs. 
*/

//LESSON 1: Repeating Tasks Manually
/*
- Before making loops we must understand that writing the same code over and over agin can vbe tiring as seen below:
*/
/*
const cities = ['San Diego', 'Bakersfeild', 'San Fransisco', 'Los Angeles'];
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
console.log(cities[3]);
*/
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
    //console.log(counter);
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
    //console.log(arrayExample[i]);
};
/*
- In the loop above the iterator is 'i'. A lot of loops use 'i' as a shorthand for index. 
- Notice the stopping condition checks to see if i is less than animals.length. 
*/
const vacationSpots = ['Paris', 'Beligum', 'France'];
for (let i = 0; i < vacationSpots.length; i++) {
   // console.log(`I would love to visit ${vacationSpots[i]}`);
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
            //console.log('Both arrays have the number: ' + yourArray[j]);
        }
    }
};
//Above we have the outer array, {myArray} and the inner array myArray[i], which will run its entirety until it finds a match with an element in the inner array.

/*
Below we will solve the follwing problem: 'You're a big wig programmer and have been tasked with building a prototype for a mutual followers program. 
Required are:
- Two arrays of online friends, from two different users.
*/
let bobsFriends = ['Lisa', 'Bart', 'Homer', 'Marge'];
let tinasFriends = ['Lisa', 'Peter'];
let mutualFollowers = [];
/*Below is a nested loop that iterated through bobsFriends as th outer and tinasFriends as the inner. If the current element from the outer loop
- is the same as the current element from the inner loop, push that element into the mutualFollowers array.
*/
for (let i = 0; i < bobsFriends.length; i++) {
    for (let j = 0; j < tinasFriends.length; j++){
        if (bobsFriends[i] === tinasFriends[j])
            console.log(mutualFollowers.push(bobsFriends[i]));
    }
};
//END OF LESSON 5: Nested Loops
//===================================================================================================================================================
// MORE LOOPS NOTES......
//Below is a basic for loop...
for (let i = 0; i < 5; i++) {
    //console.log('loop'); // We will see loop five times in the console.
};

const user = {'firstName': 'John', 'lastName': 'Doe'}
for (key in user) console.log(user[key]);
// END OF SCRATCH NOTES FOR JAVASCRIPT
//===================================================================================================================================================
// START OF LESSON 6: The While Loop

// A for loop that prints 1, 2, 3.
for (let counterOne = 0; counterOne < 4; counterOne++) {
    //console.log(counterOne);
};
// A While loop that prints 1, 2, 3.
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}
/*
- Let's break down what's happening with our while loop syntax. 
- The counterTwo variable is declared before the loop, we can access it within our while loop since it is global scope.
- We start our loop with the keyword while, which is then followed by the stopping condition and will equate to true or false just like the for loop.
- Lastly, we have the loop's code block which prints counterTwo and adds increments of ++.

- The best time to apply the while loop is when we don't know in advance how many times the loop should run.
Below is an example of a card picker while loop
*/
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard 

while (currentCard !== 'spade') {
    currentCard
    = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}
// END OF LESSON 6: The While Loop
//===================================================================================================================================================//===================================================================================================================================================
// START OF LESSON 7: Do... While Statements
/*
- The do...while statement is useful for when you want a peice of code to run once and loop based on a specific condition after it's initial run.
- A do...while statement says to do a task once then keep doing it until a certain condition is no longer met.
*/
let countString = '';
let i = 0;

do {
    countString = countString + i;
    i++;
} while (i < 5);
console.log(countString);
/*
- In the example above, the code block makes changes to the countString variable by appending the string from the i variable to it. 
- The code block after the do keyword is executed once 
- The condition is evaluated, if true it will execute again, if false the loop will come to an end.
- WHILE and DO...WHILE are different. 
*/
// More examples:
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a condition that evaluates to false
do {
    console.log(firstMessage);
} while (true === false);

// A while loop with a stopping condition that evaluates to false 
while (true === false) {
    console.log(secondMessage);
};
// END OF LESSON 7: Do...while statements
//===================================================================================================================================================//===================================================================================================================================================
// START OF LESSON 8: The Break Keyword
/*
The break keyword is useful for ending a loop once a certain condition is met. For example:
-if you plan on spending 180 days looking for a puppy but find one on day 100, you won't spend the 
-extra 80 days looking for a puppy since your original goal was just to ifnd one. 

Here's an example of the break; keyword used in action...
*/
for (let i = 0; i < 99; i++) {
    if (i > 2) {
        break;
    }
    console.log('Banana.')
}
console.log('Woohoo! I broke out of the loop!!');
/*
The break; keyword is super useful when looping through large data structures. Test conditions can be added 
- besides the stopping conditions to exit the loop once they're met.
*/
const rapperArray = ['Lil Nas X', 'Biggie Smalls', 'Tupac', 'Jay-Z'];

for (let i = 0; i < rapperArray.length; i++) {
    //console.log(rapperArray[i]);
    if (rapperArray[i] === 'Biggie Smalls') {
        break;
    }
}
console.log('And if you dont know, now you knonw N');
// END OF LESSON 8: The break; statement
//===================================================================================================================================================//===================================================================================================================================================