/*
DESCRIPTION:
Given a sequence of numbers, find the largest pair sum in the sequence.

For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/

// solution
function largestPairSum(numbers) {
	let sum = Number.NEGATIVE_INFINITY;
	
	for(let i = 0; i < numbers.length; i++) {
	  for(let j = i+1; j < numbers.length; j++) {
		if(numbers[i] + numbers[j] > sum) {
		  sum = numbers[i] + numbers[j];
		}
	  }
	}
	
	return sum;
}