/*
DESCRIPTION:
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// solution
function encode(string) {
	const strArr = string.split('');
	
	for(let i = 0; i < strArr.length; i++) {
	  if(strArr[i] === 'a') {
		strArr[i] = '1';
	  } else if(strArr[i] === 'e') {
		strArr[i] = '2';
	  } else if(strArr[i] === 'i') {
		strArr[i] = '3';
	  } else if(strArr[i] === 'o') {
		strArr[i] = '4';
	  } else if(strArr[i] === 'u') {
		strArr[i] = '5';
	  }
	}
  
	return strArr.join('');
  }
  
  function decode(string) {
	const strArr = string.split('');
	
	for(let i = 0; i < strArr.length; i++) {
	  if(strArr[i] === '1') {
		strArr[i] = 'a';
	  } else if(strArr[i] === '2') {
		strArr[i] = 'e';
	  } else if(strArr[i] === '3') {
		strArr[i] = 'i';
	  } else if(strArr[i] === '4') {
		strArr[i] = 'o';
	  } else if(strArr[i] === '5') {
		strArr[i] = 'u';
	  }
	}
  
	return strArr.join('');
}