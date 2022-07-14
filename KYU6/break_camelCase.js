/* 
DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// solution 
function solution(string) {
	// convert str into an arr of words.
	const splitArr = string.split(/(?=[A-Z])/g);
  
	// loop through the array
	for(let i = 0; i < splitArr.length; i++) {
	  if(i !== 0) {
		splitArr[i] = splitArr[i][0].toUpperCase() + splitArr[i].slice(1);
	  }
	}
	return splitArr.join(' ');
  }