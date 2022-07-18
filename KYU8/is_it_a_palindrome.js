/*
DESCRIPTION:
Write a function that checks if a given string (case insensitive) is a palindrome. 
*/

// solution
function isPalindrome(x) {
	let j = x.length - 1;
	
	for(let i = 0; i <= x.length / 2; i++) {
	  // edge case: empty string.
	  if(x.length === 0) {
		return true;
	  // case 1: left side doesn't equal right side.
	  } else if(x[i].toLowerCase() !== x[j].toLowerCase()) {
		return false;
	  // case 2: left side equals right side, then check next set.
	  } else {
		j--;
	  }
	}
	return true;
}