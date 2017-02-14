"use strict";

// Test average exercise.

var testOne = 70,
	testTwo = 80,
	testThree = 95,
	numberOfTests = 3,
	requiredAverage = 80,
	testSum = testOne + testTwo + testThree,
	average = testSum / numberOfTests;

if (average > requiredAverage) {
	console.log("You're awesome!");
} else {
	console.log("You need to practice more.");
}

// Grocery shopping exercise.

var discount = 0.65
var cameronPurchase = 180;
var ryanPurchase = 250;
var georgePurchase = 320;
var totalRequired = 200;
var cameronTotal = cameronPurchase * discount;
var ryanTotal = ryanPurchase * discount;
var georgeTotal = georgePurchase * discount;

if (cameronPurchase > totalRequired) {
	console.log("Discount is applied. Cameron spent $" + cameronPurchase +
	 " and will have to pay a total of $" + cameronTotal + "." );
} else {
	console.log("Cameron will need to purchase $" + (totalRequired - cameronPurchase) +
	 " more in groceries to have discount applied.")
}

if (ryanPurchase > totalRequired) {
	console.log("Discount is applied. Ryan spent $" + ryanPurchase +
	 " and will have to pay a total of $" + ryanTotal + "." );
} else {
	console.log("Ryan will need to purchase $" + (totalRequired - ryanPurchase) +
	 " more in groceries to have discount applied.")
}

if (georgePurchase > totalRequired) {
	console.log("Discount is applied. George spent $" + georgePurchase +
	 " and will have to pay a total of $" + georgeTotal + "." );
} else {
	console.log("George will need to purchase $" + (totalRequired - georgePurchase) +
	 " more in groceries to have discount applied.")
}

// Flip a coin exercise.

var flipACoin = Math.floor(Math.random()* 2)

// if (flipACoin === 0) {
// 	console.log("Buy a car!")
// } else {
// 	console.log("Buy a house!")
// }

var whichPurchase = (flipACoin === 0) ? console.log("Buy a car!") : console.log("Buy a house!");

