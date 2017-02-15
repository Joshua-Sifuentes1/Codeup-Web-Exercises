"use strict";

var myNameIs = 'Joshua'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.

function sayHello(name) {
	console.log("Hello from " + name + "!");
}
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
sayHello(myNameIs);

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*10)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.

// function isOdd(input) {
// 	var number = (input % 2 === 0) ? input + " is not odd." : input + " is odd.";
// 	console.log(number);
// }

function isOdd(number) {
	var result;

	if (number % 2 === 0) {
		result = false;
	} else {
		result = true;
	} 
	// return result;
}

if(isOdd(random)) {
	console.log(random + " is odd");
} else console.log (random + " is even");

if(isOdd(1)) {
	console.log("One is the loniest number and it is odd.");
}
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.