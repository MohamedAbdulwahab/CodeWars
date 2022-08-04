/*
DESCRIPTION:
Your task is to write function factorial.

Examples:
factorial(3) => 1 * 2 * 3 = 6
factorial(5) => 5 * 4 * 3 * 2 * 1 = 120
*/

// solution
function factorial(n){
	// base case
	if(n <= 1) {
	  return 1;
	}
	// recursive case
	return n * factorial(n - 1);
  }