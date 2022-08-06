/*
DESCRIPTION:
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

// solution
function distinct(a) {
	const distinct = new Set();
  
	for(let i = 0; i < a.length; i++) {
	  distinct.add(a[i]);
	}
  
	return Array.from(distinct);
}