/*
DESCRIPTION:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

// solution
function twoSort(s) {
	const sortedArr = s.sort();
	const stars = [];
	
	for(let i = 0; i < sortedArr[0].length; i++) {
	  stars.push(sortedArr[0][i]);
	  stars.push('***');
	}
	stars.pop();
	
	return stars.join('');
}