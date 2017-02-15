"use strict";

// While Loop exercise 3.

var i = 2;

while (i <= 65536) {
	console.log(i);
	i *= 2;
}

// Ice Cream exercise.

 // This is how you get a random number between 50 and 100
 var allCones = Math.floor(Math.random() * 50) + 50;
 // This is how you get a random number between 1 and 5
 // var cones = Math.floor(Math.random() * 5) + 1;


 do {
 	console.log("---------------");
 	console.log(allCones + " total cones.");
 	var cones = Math.floor(Math.random() * 5) + 1;
 	
 	if (allCones >= cones) {
 			console.log(cones + " cones requested/sold.");
 			allCones = allCones - cones;
 	} else {
 		console.log("Cannot sell you " + cones + " I only have " +
 		 allCones + " remaining.")
 	}
 	console.log(allCones + " cones remaining.")

 } while (allCones > 0);
 	console.log("Yay! I sold them all!");


//	Random number of cones required to sell

//	Random number(1-6) of cones purchased per person

//	log number of cones sold

//	subtract number of cones purchased with remaining cones.

//	repeat until you do not have enough to sell or zero