/* 
DESCRIPTION:
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.
See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:
sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.
sumDigPow(90, 100) == []

Enjoy it!!
*/


// solution
function sumDigPow(a, b) {
	const eureka = [];
	let currentN = '';
	let sum = 0;
  
	for(let i = a; i < b; i++) {
	  // case 1: i is between 1 and 9
	  if((i >= 1) && (i <= 9)) {
	  eureka.push(i);
	  // case 2: greater than 9 [two digits]
	  } else if(i >= 10) {
		// split number into digits.
		currentN = String(i).split('');
		// must reset sum for every i iteration. 
		sum = 0;
		// square each digit to the power of (i+1) and store the sum of the digits in the sum variable.
		for(let j = 0; j < currentN.length; j++) {
		  currentN[j] = Number(Math.pow(Number(currentN[j]), j + 1));
		  sum += Number(currentN[j]);
		}
		// if the sum of the current set = current i, then we have an eureka.
		if (sum === i) {
		  eureka.push(i);
		}
	  }
	}
	return eureka;
}