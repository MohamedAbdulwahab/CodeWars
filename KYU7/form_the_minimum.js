/*
DESCRIPTION:
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

Examples:
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/

// solution
function minValue(values) {
	const counter = {};
	const noDuplicates = [];
  
	// find and store the occurrences of each number.
	for(let i = 0; i < values.length; i++) {
	  if(!counter.hasOwnProperty(values[i])) {
		counter[values[i]] = 1;
	  } else {
		counter[values[i]]++;
	  }
	}
  
	// remove duplicates.
	for(const property in counter) {
	  noDuplicates.push(property);
	}
  
	// return the minimum value.
	return Number(noDuplicates.sort((a, b) => a - b).join(''));
}