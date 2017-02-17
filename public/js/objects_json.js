'use strict';

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];

var books = [

	{
		"title" : "Eloquent JavaScript",
		"author" : {
			"firstName" : "Marijn",
			"lastName" : "Haverbeke"
		}
	}, 
	{
		"title" : "JavaScript: The Good Parts",
		"author" : {
			"firstName" : "Douglas",
			"lastName" : "Crockford"
		}
	}, 
	{
		"title" : "HTML And CSS: Design and Build Websites",
		"author" : {
			"firstName" : "Jon",
			"lastName" : "Duckett"
		}
	}, 
	{
		"title" : "The Martian",
		"author" : {
			"firstName" : "Andy",
			"lastName" : " Weir"
		}
	}, 
	{
		"title" : "1984",
		"author" : {
			"firstName" : "George",
			"lastName" : "Orwell"
		}
	}
];

// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here

books.forEach(function (book, index){

	console.log("Book #" + (index + 1));
	console.log("Title: " + book.title);
	console.log("Author: " + book.author.firstName + " " + book.author.lastName);
	console.log("---");
});
// end loop here



