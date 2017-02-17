"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// recursion

	// prompt user name
	// if their response is empty
	// call getName again

function getName() {
	var name = prompt("Please enter your name");

	//if their response is empty
	if (name == "") {
		// call getName again
		return getName();
	} else {
		return name;
	}
}

// calling code
var name = getName();

// var name = prompt("What is your first and last name?");
// name = name.trim();

// while (name === "") {
// 	name = prompt("C'mon, I know you have a name. What is your name?");
// 	name = name.trim();
// }

// TODO: Show an alert message that welcomes the user based on their input.
alert("Hi " + name + "! Welcome to my page!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var pizza = confirm("Do you like pizza?");

if (pizza) {
	alert("Nice! I knew pizza was loved by everybody!");
} else {
	alert("Whoa, I thought everybody likes pizza!");
}


