/* 
DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// solution
// Note: I intentionally did not use the .endsWith() function. Instead, I decided to implement the .endsWith() function myself.
function solution(str, ending){
	const strArr = str.split('');
	const endArr = ending.split('');
	let counter = strArr.length - 1;
  
	for(let i = endArr.length - 1; i >= 0; i--) {
	  if(endArr[i] !== strArr[counter]) {
		return false;
	  }
	  counter--;
	}
	return true;
}