/*
DESCRIPTION:
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

// solution
function isSortedAndHow(array) {
	const arr1 = [...array];
	const arr2 = [...array];
	const increasing = arr1.sort((a, b) => a - b);
	const decreasing = arr2.sort((a, b) => b - a);
  
	const a = array.filter((e, i) => e !== increasing[i]);
	const b = array.filter((e, i) => e !== decreasing[i]);
  
	if(a.length === 0) {
	  return 'yes, ascending';
	} else if(b.length === 0) {
	  return 'yes, descending';
	} else {
	  return 'no';
	}
}