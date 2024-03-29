/*
DESCRIPTION:
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

// solution
function hasUniqueChars(str) {
	const counter = {};
	
	for(let i = 0; i < str.length; i++) {
	  if(!counter.hasOwnProperty(str[i])) {
		counter[str[i]] = 1;
	  } else {
		counter[str[i]]++;
	  }
	}
	
	for(const property in counter) {
	  if(counter[property] > 1) {
		return false;
	  }
	}
	
	return true;
}