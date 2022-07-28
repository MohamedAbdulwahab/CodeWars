/* 
DESCRIPTION:
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

// solution: there is definitely room for improvement here, but this is a working solution.
function toWeirdCase(string) {
	// case 1: string is a single word.
	if(string.indexOf(' ') === -1) {
	  // turn the string into an array. 
	  let strArr = string.toLowerCase().split('');
  
	  // loop through each letter.
	  for(let i = 0; i < strArr.length; i++) {
		// turn letters with even indices into uppercase. 
		if(i % 2 === 0) {
		  strArr[i] = strArr[i].toUpperCase();
		}
	  }
	  // turn the array into a string and return it. 
	  return strArr.join('');
	// case 2: string contains more than one word.
	} else {
	  // turn every letter to lowercase and split the string into an array of words.
	  let newStr = string.toLowerCase().split(' ');
  
	  // loop through each word in the array.
	  for(let i = 0; i < newStr.length; i++) {
		// turn each word into letters.
		newStr[i] = newStr[i].split('');
  
		// loop through the letters of each word (2D array).
		for(let j = 0; j < newStr[i].length; j++) {
		  // turn even indices to upper case. [odd indices are already lowercase]
		  if(j % 2 === 0) {
			newStr[i][j] = newStr[i][j].toUpperCase();
		  }
		}
		// turn the individual letters back into words.
		newStr[i] = newStr[i].join('');
	  }
	  // turn the words array into a string and return it.
	  return newStr.join(' ');
	}
  }