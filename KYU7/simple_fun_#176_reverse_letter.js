/*
DESCRIPTION:

Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

// solution
function reverseLetter(str) {
	const strArr = str.split('');
  
	const filtered = strArr.filter((e, i) => {
	  if(e.match(/[a-z]/ig)) {
		return e;
	  }
	});
  
	return filtered.reverse().join('');
}