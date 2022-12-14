/*
DESCRIPTION:
Given string s, which contains only letters from a to z in lowercase.
- A set of alphabet is given by abcdefghijklmnopqrstuvwxyz.
- 2 sets of alphabets mean 2 or more alphabets.
- Your task is to find the missing letter(s). You may need to output them by the order a-z. It is possible that there is more than one missing letter from more than one set of alphabet.
- If the string contains all of the letters in the alphabet, return an empty string ""

Examples:
For s='abcdefghijklmnopqrstuvwxy'
The result should be 'z'

For s='aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy'
The result should be 'zz'

For s='abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy'
The result should be 'ayzz'

For s='codewars'
The result should be 'bfghijklmnpqtuvxyz'

Input/Output
[input] string s
Given string(s) contains one or more set of alphabets in lowercase.

[output] a string
Find the letters contained in each alphabet but not in the string(s). Output them by the order a-z. If missing alphabet is repeated, please repeat them like "bbccdd", not "bcdbcd"
*/

// solution
function missingAlphabets(s) {
	// create an alphabet array that holds all the lower-case letters in the English alphabet.
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	
	// create an alphabet object that assigns 1 to all the lower-case English alphabet letters.
	const alphabetObj = {};
	for(let i = 0; i < alphabet.length; i++) {
	  alphabetObj[alphabet[i]] = 1;
	}
  
	// find the occurrences of each letter in the given (input) string. 
	const presentAlphabets = {};
	for(let i = 0; i < s.length; i++) {
	  if(!presentAlphabets.hasOwnProperty(s[i])) {
		presentAlphabets[s[i]] = 1;
	  } else {
		presentAlphabets[s[i]]++;
	  }
	}
  
	// find the maximum occurrence in all the letter in the given (input) string.
	let max = 0;
	for(const property in presentAlphabets) {
	  if(presentAlphabets[property] > max) {
		max = presentAlphabets[property];
	  }
	}
  
	// if a letter is missing in the given (input) string, add that letter to str and repeat for as many times as 'max' is.
	let str = '';
	for(const property in alphabetObj) {
	  if(!presentAlphabets.hasOwnProperty(property)) {
		for(let i = 0; i < max; i++) {
		  str += property;
		}
	  }
	}
  
	// if a letter is present but not repeated enough times, repeat that letter until it matches the max repetitions. 
	for(const property in presentAlphabets) {
	  if(presentAlphabets[property] < max) {
		for(let i = 0; i < max - presentAlphabets[property]; i++) {
		  str += property;
		}
	  }
	}
  
	// sort the str in an alphabetical order and return it. 
	return str.split('').sort().join('');
}