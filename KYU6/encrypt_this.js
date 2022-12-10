/*
DESCRIPTION:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
	- The first letter must be converted to its ASCII code.
	- The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// solution
var encryptThis = function(text) {
	let strArr = text.split(' ');
  
	// loop though each word. 
	for(let i = 0; i < strArr.length; i++) {
	  let ASCII;                // holds ASCII code of first letter of each.
	  let secondLetter;         // holds the second letter of each word. 
	  let lastLetter;           // holds the last letter of each word.
	  let restOfLetters;        // holds the rest of the letters of each word.
  
	  // case 1: the word contains only one letter. 
	  if(strArr[i].length === 1) {
		// get the ASCII code. 
		ASCII = strArr[i][0].charCodeAt(0);
		// construct the word: only contains the ASCII code.  
		strArr[i] = `${Number(ASCII)}`;
	  }
	  // case 2: the world contains only two letters.  
	  else if(strArr[i].length === 2) {
		// get the ASCII code.
		ASCII = strArr[i][0].charCodeAt(0);
		// get the second letter in the word.
		secondLetter = strArr[i][1];
		// construct the word: only contains the ASCII code and the second letter.
		strArr[i] = `${Number(ASCII)}${secondLetter}`;
	  }
	  // case 3: the word contain more than 2 letters.  
	  else {
		// loop through each letter in each word. 
		for(let j = 0; j < strArr[i].length; j++) {
		  // get the ASCII code.
		  ASCII = strArr[i][0].charCodeAt(0);
		  // get the second letter in the word.
		  secondLetter = strArr[i][1];
		  // get the last letter in the word. 
		  lastLetter = strArr[i][strArr[i].length - 1];
		  // get the letters between the second letter and the last letter. 
		  restOfLetters = strArr[i].substring(2, strArr[i].length - 1);
		}
		// construct the word: contains the ASCII, last Letter, restOfLetters, and second letter.
		strArr[i] = `${Number(ASCII)}${lastLetter}${restOfLetters}${secondLetter}`;
	  }
	}
  
	// turn the array into a string with spaces as the glue. 
	return strArr.join(' ');
}