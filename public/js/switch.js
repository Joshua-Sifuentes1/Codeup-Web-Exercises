"use strict";

// Lucky number generator that generates a number between 0 and 5.

var luckyNumber = Math.floor(Math.random()* 6);

var totalSpent = 60,
	discount0 = totalSpent * 0,
	discount1 = totalSpent * 0.1,
	discount2 = totalSpent * 0.25,
	discount3 = totalSpent * 0.35,
	discount4 = totalSpent * 0.45,
	discount5 = totalSpent * 1.00,
	totalCost0 = totalSpent - (totalSpent * discount0),
	totalCost1 = totalSpent - (totalSpent * discount1),
	totalCost2 = totalSpent - (totalSpent * discount2),
	totalCost3 = totalSpent - (totalSpent * discount3),
	totalCost4 = totalSpent - (totalSpent * discount4),
	totalCost5 = totalSpent - (totalSpent * discount5);


switch (luckyNumber) {
	case 0:
		console.log("You get get no discount. Sorry.");
		break;
	case 1:
		console.log("Congratulations! You get a $" + discount1 + " discount if you spend $" +
		 totalSpent + "!");
		break;
	case 2:
		console.log("Congratulations! You get a $" + discount2 + " discount if you spend $" +
		 totalSpent + "!");
		break;
	case 3:
		console.log("Congratulations! You get a $" + discount3 + " discount if you spend $" +
		 totalSpent + "!");
		break;
	case 4:
		console.log("Congratulations! You get a $" + discount4 + " discount if you spend $" +
		 totalSpent + "!");
		break;
	case 5:
		console.log("Congratulations! You get everything for free! Yay!");
		break;
	default:
		console.log("Something went wrong.");
}

//

// var priceBeforeDiscount = 60;
// var dicountPercentage;


var number = 1;

switch (number) {
	case 1:
		console.log("January");
		break;
	case 2:
		console.log("February");
		break;
	case 3:
		console.log("March");
		break;
	case 4:
		console.log("April");
		break;
	case 5:
		console.log("May");
		break;
	case 6:
		console.log("June");
		break;
	case 7:
		console.log("July");
		break;
	case 8:
		console.log("August");
		break;
	case 9:
		console.log("September");
		break;
	case 10:
		console.log("October");
		break;
	case 11:
		console.log("November");
		break;
	case 12:
		console.log("December");
		break;

}