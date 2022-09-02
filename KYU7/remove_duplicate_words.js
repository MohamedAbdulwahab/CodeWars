/*
DESCRIPTION:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

// solution
function removeDuplicateWords(s) {
	const strArr = s.split(' ');
	const counter = {};
	let newArr = [];
  
	for(let i = 0; i < strArr.length; i++) {
	  if(!counter.hasOwnProperty(strArr[i])) {
		counter[strArr[i]] = 1;
	  } else {
		counter[strArr[i]]++;
	  }
	}
  
	for(const property in counter) {
	  newArr.push(property);
	}
  
	return newArr.join(' ');
}