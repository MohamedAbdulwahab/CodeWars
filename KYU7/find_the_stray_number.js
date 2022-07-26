/*
DESCRIPTION:
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// solution
function stray(numbers) {
	const sortedArr = numbers.sort((a, b) => a - b);
	const min = sortedArr[0];
	const max = sortedArr[sortedArr.length - 1];
  
	if(sortedArr[1] === min) {
	  return max;
	} else {
	  return min;
	}
}