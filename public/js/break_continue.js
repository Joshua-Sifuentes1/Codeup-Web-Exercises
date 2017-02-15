"use strict";


//---------------------------------------

//---------------------------------------

do {
	var random = Math.floor((Math.random()*50)+1);
}	while (random % 2 === 0);

console.log("Random odd number to skip: " + random);

for (var i = 1; i <=50; i++) {

	if (i % 2 !== 1) {
		continue;
	} 

	if (i === random) {
		console.log("Yikes! Skipping this number: " + random);
		continue;
	}

	console.log("Here is an odd number: " + i)

}