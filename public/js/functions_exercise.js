"use strict";
// functions Exercises
// make a new html file called functions-extras.html and add JS that satisfies the following requirements
// 1. Write a function definition for a function named "log" that takes in a single variable and logs it to the JS console. 

function log(stuff) {
	console.log(stuff);
}

// 2. Create a variable called "result" and assign it the value of the function call.

var result = log("Hello");
console.log(result);

// 3. What is the value and data type stored in the variable called "result"

	//undefined

// Then
// 1. Write a function called "identity" that takes in a single variable and returns it.

function identity(input){
	return input;
}

// 2. Create a variable called "result" and assign it the value of the function call.

var result = identity("Hello");
console.log(result);

// 3. What is the value and data type stored in the variable called "result"

// The value is the string "Hello" I entered.

// Write a function called getRandomIntBetween(min, max) that takes in a min and max parameter and returns a random
// int between those numbers.

function getRandomIntBetween(max, min) {
	var random = Math.floor(Math.random() * (max - min)) + min;
	return random;

}

var roll = getRandomIntBetween(10, 5);
console.log(roll);

// Write a function called isNumeric(input) that takes in the input and returns true/false if the input is a number
// or string containing a number

function isNumeric(input) {
	return !isNaN(input);
}

var input = isNumeric('10');
console.log(input);

// Define the following basic math functions
// add(a, b)

function add(a, b){
	return a  + b;
}
var addFunction = add(10, 15);
console.log(addFunction);

// subtract(a, b)

function subtract(a, b) {
	return a - b;
}

// multiply(a, b)

function multiply(a, b) {
	return a * b;
}

// divide(a, b)

function divide(a, b) {
	return a / b;
}

// Define a function called square(a), make sure it uses your multiply() function, not *

function square(a) {
	return multiply(a, a);
}
var squareFunction = square(10);
console.log(squareFunction);

// BONUS:
// write a function definition called sumOfSquares(a,b)
// that only uses the add() and multiply() or square() functions from above
// so sumOfSquares(2, 3) should return 13

function sumOfSquares(a, b) {
	return add(square(a), square(b));
}
var sumOfSquareFunction = sumOfSquares(2, 3);
console.log(sumOfSquareFunction);



