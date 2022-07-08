/* 
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

Example:
alphabetPosition("The sunset sets at twelve o' clock.")
Should return: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ).
*/

function alphabetPosition(text) {
	let arr = [];
	
	// use regex to find only a-z letters, ignore case sensitivity, and find all.
	let regex = /[a-z]/ig;
	  
	for(let i = 0; i < text.length; i++) {
	  // check if the current letter is in the .match(regex) list.
	  if((text.match(regex) !== null) && (text.match(regex).includes(text[i]))) {
		// convert letters to numbers.
		arr.push(parseInt(text[i], 36) - 9);
	  }
	}
	// convert array to string and replace commas with white spaces.
	return String(arr).replace(/,/g, ' ');
}
