/* 
DESCRIPTION:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}
*/

// solution
function count(string) {  
	const arr = string.split('');
	const countObj = {};
  
	for(let i = 0; i < arr.length; i++) {
	  if(!countObj[arr[i]]) {
		countObj[arr[i]] = 1;
	  } else {
		countObj[arr[i]]++;
	  }
	}
	
	 return countObj;
  }