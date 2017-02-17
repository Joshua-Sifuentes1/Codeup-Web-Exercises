(function(){
	"use strict";

	var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
	var planetsArray;

	// TODO: Convert planetsString to an array, save it to planetsArray.

	planetsArray = planetsString.split("|");

	console.log(planetsArray);

	// TODO: Create a string with <br> tags between each planet. console.log() your results.
	//       Why might this be useful?

	var planetsBreakString = planetsArray.join("<br>");

	console.log(planetsBreakString);

	// Bonus: Create a second string that would display your planets in an undordered list.
	//        You will need an opening AND closing <ul> tags around the entire string,
	//        and <li> tags around each planet.
	//        console.log() your results.

	var planetsList = planetsArray.join("</li><li>");

	console.log("<ul><li>" + planetsList + "</li></ul>");

	// var planetsOpening = "<ul><li>"

	// var planetsClosing = "</li></ul>"

	// console.log(planetsOpening + planetsListMid + planetsClosing);
})();