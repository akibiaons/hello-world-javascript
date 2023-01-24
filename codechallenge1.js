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