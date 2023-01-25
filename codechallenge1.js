// The first challenge is to log "Hello World my name is ${name} into the console with console.log();"
console.log('Hello World my name is Arthur');
// END OF CODE CHALLENGE A FOR CODECHALLENGE 1:
//===============================================================================

/*
Part B will require that we use comments to explain a script that calculates the area of a circle with
radius of 5.
*/
// The two lines below calculate the area of a circile with a radius of 5
const radius = 4;
const pi = 3.14;

let area = pi * (radius * radius);
console.log(Math.floor(area));
// END OF CHALLENGE PART B
//====================================================================================
// For part C the challenge will require that we create three variables and log them to the console.
let age = 20;
let name = 'Arthur';
let isStudent = false;
// Original try-----> console.log(age, name, isStudent); // I added this console.log with each value but the challenge required that I add each console.log(); statement individually...
console.log(age);
console.log(name);
console.log(isStudent);
// END OF CHALLENGE 1 PT C
//============================================================================================
/*Challenge D will start below
this comment and will use the variables from above to form
a concatenated string of "Hello ${name}";
*/
console.log(`Hello, ${name}`);
// END OF CHALLENGE D
//=====================================================================================x
/*
Challenge E will utilize objects to create a property
color and value then finally logging them into the console... 
*/
let car = {color:'Red'};
console.log(car.color);
// END OF CHALLENGE E
//==========================================================================
/* Challenge F will have me write out a script that creates an object with
-a method 'drive' that logs the message, the car is now driving...
*/
/*
let carStatus = function() {
    car.status('drive') = function() {
        return 'The car is now driving';
    }
};
Above was attemp #1 at challenge F*/
// Below is the answer 
let carStatus = {
    drive: function() {
        console.log('The car is now driving');
    }
};
carStatus.drive();
/*
So we first created a variable with let and set it equal to
carStatus, then made created drive as a method and made a 
function that would print console.log('The car is now driving');
we finally called the method by using the variable name,
a dot operator, followed by out new method...
*/
// END OF CHALLENGE F =====================================================================
/*
Challenge G will have me practice using some of the built in objects
that come with JavaScript...

I will be making a script that creates a Date object representing the 
current date and time and logs the date in MM/DD/YYYY format...
*/
let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
console.log(`${month},${day},${year}`);
//Below us a luhun algorithim......
function isValidLuhn(number) {
    let sum = 0;
    let digit = 0;
    let addend = 0;
    let timesTwo = false;
  
    // Process each digit one by one starting at the right
    for (let i = number.length - 1; i >= 0; i--) {
      digit = parseInt(number.charAt(i));
  
      // Multiply digits by 2 and add digits if product is more than 9
      if (timesTwo) {
        addend = digit * 2;
        if (addend > 9) {
          addend -= 9;
        }
      } else {
        addend = digit;
      }
      sum += addend;
      timesTwo = !timesTwo;
    }
  
    // Return true if sum is divisible by 10, false otherwise
    return sum % 10 === 0;
  };  

  // A basic function with three parameters that logs the sum of all the parameters...
  /*
  function argCheck(parameter1, parameter2, parameter3) {
    console.log(parameter1, parameter2, parameter3);
  } 
  //Function with extra arguments, 
  argCheck(parameter1, parameter2, parameter3, parameter4, parameter5);
  console.log(argCheck(1, 2, 3, 4, 5));
  */
/*
Below I will create an object named calculator with a method add that takes in two numbers
- and returns the sum of both numbers..
*/
let sum = {
  num1: 8,
  num2: 10
}
console.log(sum.num1 + sum.num2);

/*
In the next challenge I will generate a random number
-between 1 and 100, then round it to the nearest whole
number and log the result to the console...
*/
const randomNum = () => {
  return Math.floor(Math.random() * 100);
};
console.log(randomNum());
// Challenge completed...