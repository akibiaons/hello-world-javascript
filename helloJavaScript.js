console.log('Hello, World!');

const helloWorld = (name) => {
    return `Hello ${name}`;
};

console.log(helloWorld(Arthur));
// The code above should print my name...
// It is a classic excersie I use to double check and practice my 
//-finctions on, I will be making it harder now...

console.log(Math.random());
// The console above prints out a random number between 0 and 1
/*
Many times we use the above JS statement to give
a random number to be multiplied by x..
*/
console.log(Math.random()*50);
// This generated a number between 0 - 50...

/* If we do not want any of the numbers to be a
-decimal we can use the Math.floor method to 
round the number down
*/
console.log(Math.floor(Math.random()));
//This makes sure that the number is a whole number

console.log(Math.ceil(43.8));
/*
The statement above returns the smallest integer greater than or equal to a decimal number...
*/
new Int32Array([1.1, 1.9, -1.1, -1.9]); // Int32Array(4) [ 1, 1, -1, -1 ]
new Int8Array([257, -257]); // Int8Array(1) [ 1, -1 ]
// 257 = 0001 0000 0001 = 0000 0001 (mod 2^8) = 1
// -257 = 1110 1111 1111 = 1111 1111 (mod 2^8) = -1 (as signed integer)
new Uint8Array([257, -257]); // Uint8Array(1) [ 1, 255 ]
// -257 = 1110 1111 1111 = 1111 1111 (mod 2^8) = 255 (as unsigned integer)