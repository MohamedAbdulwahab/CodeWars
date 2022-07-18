/*
DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. 
*/

// solution
function find_average(array) {
  
	// edge case: empty array.
	if(array.length === 0) {
	  return 0;
	}
	// calculate the sum.
	const sum = array.reduce((acc, current) => acc + current, 0);
	
	// return avg.
	return sum / array.length;
}