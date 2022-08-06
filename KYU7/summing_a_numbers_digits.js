/*
DESCRIPTION:
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)
10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.
*/

// solution
function sumDigits(number) {
	const strArr = String(number).split('');
	let sum = 0;
  
	const filteredArr = strArr.filter((e) => e.match(/\d/ig));
  
	for(let i = 0; i < filteredArr.length; i++) {
	  sum += Number(filteredArr[i]);
	}
  
	return sum;
}