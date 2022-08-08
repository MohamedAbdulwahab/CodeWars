/*
DESCRIPTION:
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

// solution
function take(arr, n) {
	const subArr = [];
	
	if(arr.length === 0) {
	  return [];
	}
	
	for(let i = 0; i < Math.min(n, arr.length); i++) {
	  subArr.push(arr[i]);
	}
	
	return subArr;
}