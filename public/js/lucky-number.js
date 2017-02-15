// Your friend needs help finishing a count-the-lucky-number program. Finish it!


'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var number0 = 0;
var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var number5 = 0;

while (i < 100) {
	i++;
    luckyNumber = Math.floor(Math.random()* 6);
    // What do I need here?
    switch (luckyNumber) {
    	case 0: 
	    	number0++;
	    	break;
	    case 1:
	    	number1++;
	    	break;
	    case 2: 
	    	number2++;
	    	break;
	    case 3:
	    	number3++;
	    	break;
	    case 4: 
	    	number4++;
	    	break;
	    case 5:
	    	number5++;
	    	break;
	}
 }

console.log("0 appeared " + number0 + " times.");
console.log("1 appeared " + number1 + " times.");
console.log("2 appeared " + number2 + " times.");
console.log("3 appeared " + number3 + " times.");
console.log("4 appeared " + number4 + " times.");
console.log("5 appeared " + number5 + " times.");

// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100