"use strict";

var average = (70 + 80 + 95) / 3;

if (average > 80) {
	console.log("You're awesome!");
} else {
	console.log("You need to practice more.");
}


var cameronPurchase = 180;
var ryanPurchase = 250;
var georgePurchase = 320;

if (cameronPurchase > 200) {
	console.log("Discount is applied. Cameron spent $" + cameronPurchase + " and will have to pay a total of $" + (cameronPurchase * 0.65) + "." );
} else {
	console.log("Cameron will need to purchase $" + (200 - cameronPurchase) + " more in groceries to have discount applied.")
}

if (ryanPurchase > 200) {
	console.log("Discount is applied. Ryan spent $" + ryanPurchase + " and will have to pay a total of $" + (ryanPurchase * 0.65) + "." );
} else {
	console.log("Ryan will need to purchase $" + (200 - ryanPurchase) + " more in groceries to have discount applied.")
}

if (georgePurchase > 200) {
	console.log("Discount is applied. George spent $" + georgePurchase + " and will have to pay a total of $" + (georgePurchase * 0.65) + "." );
} else {
	console.log("George will need to purchase $" + (200 - georgePurchase) + " more in groceries to have discount applied.")
}

var flipACoin = Math.floor(Math.random()* 2)

// if (flipACoin === 0) {
// 	console.log("Buy a car!")
// } else {
// 	console.log("Buy a house!")
// }

var whichPurchase = (flipACoin === 0) ? console.log("Buy a car!") : console.log("Buy a house!");