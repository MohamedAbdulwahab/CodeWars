/*
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// solution
function solution(str){
	const strArr = [];
  
	for(let i = 0; i < str.length; i += 2) {
	  strArr.push(str.slice(i, i+2));
	}
  
	if(str.length % 2 !== 0) {
	  strArr[strArr.length - 1] = str[str.length - 1] + '_';
	}
  
	return strArr;
}