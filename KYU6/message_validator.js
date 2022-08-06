/*
DESCRIPTION:
In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:
- Messages are composed of only letters and digits
- Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
- Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
- If the message is an empty string, you should return true
*/

// solution
function isAValidMessage(message) {
	// get words only and store them in words array.
	const words = message.split(/\d/ig).filter((e) => e != '');
  
	// get numbers only and store them in numbers array.
	const numbers = message.split(/[a-z]/ig).filter((e) => e != '');
  
	// edge case 1: empty string.
	if(message === '') {
	  return true;
	// edge case 2: message starts with a letter instead of a number.
	} else if(/[a-z]/ig.test(message[0])) {
	  return false;
	// edge case 3: there are more numbers than letters or more letters than numbers.
	} else if(words.length !== numbers.length) {
	  return false;
	} 
	
	// now we know that words.length === numbers.length. 
	// Loop over either words arr or numbers arr.
	for(let i = 0; i < words.length; i++) {
	  // the length of words is not the same as the length given for that word. 
	  if(words[i].length !== Number(numbers[i])) {
		return false;
	  }
	}
  
	// return true if the length of all words equals the length given for that word.
	return true;
  }