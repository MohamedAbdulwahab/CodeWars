/*
DESCRIPTION:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// recursive solution 
function persistence(num) {
	let product = 1;

	// base case: one digit.
	if(num / 10 < 1) {
		return 0;
	}

	// get each digit from num and multiply them all together. 
	const arr = String(num).split('');
	for(let i = 0; i < arr.length; i++) {
		product *= Number(arr[i]);
	}

	// return 1 + how many times the recursion occurred. 
	return 1 + persistence(product);
}