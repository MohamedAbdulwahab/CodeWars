/*
DESCRIPTION:
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Examples:
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

// solution
var greet = function(name) {
	return `Hello ${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
};