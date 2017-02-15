"use strict"
//----------------------------------------------------
// Decrement by 5 until you get to zero. Problem #5
//----------------------------------------------------

for (var i = 100; i > 0; i -= 5) {
	console.log(i);
}

//----------------------------------------------------
//problem #2 
//----------------------------------------------------
var numberOutput = 1;
for (var i = 1; i <= 10; i++) {
	numberOutput = (i % 10);
	for (var j = 1; j < i; j++) {
		numberOutput += String((i % 10));
	}
	console.log(numberOutput);
}
//----------

var numberToString;
for (var i = 1; i < 10; i++) {
	var numberToString = i + "";
	console.log(numberToString.repeat(i))
}

//--------------


for (var i = 1; i <=10; i++) {

	console.log(i.toString().repeat(i));
} if (i % 10 === 0) {

	console.log(i.toString().repeat(i));
}

//----------------------------------------------------
// Problem #4 determine whether number is even or odd.	
//----------------------------------------------------

for (var i = 1; i < 11; i++) {
	var random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;	
		
		if (random % 2 === 0) {
			console.log(random + " is even.");
		} else {
			console.log(random + " is odd.");
		}
}

//----------------------------------------------------
//Times table problem #3
//----------------------------------------------------

var number = Math.floor(Math.random() * 10) + 1;

var answer;

for (var i = 1; i < 11; i++) {
	answer = number * i;
	console.log(number + "x" + i + "=" + answer);
}