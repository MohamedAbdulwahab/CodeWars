/*
DESCRIPTION:
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

// solution 1:
function reverse(str) {
	const strArr = str.split(' ');
  
	for(let i = 1; i < strArr.length; i += 2) {
	  strArr[i] = strArr[i].split('').reverse().join('');
	}
  
	return (str == false) ? '' : strArr.join(' ');
}

// solution 2:
function reverse(str) {
	const strArr = str.split(' ');
  
	for(let i = 1; i < strArr.length; i += 2) {
	  strArr[i] = strArr[i].split('').reverse().join('');
	}
  
	return strArr.join(' ').trim(' ');
}