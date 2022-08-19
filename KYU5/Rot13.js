/*
DESCRIPTION:
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

// solution
function rot13(message){
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'.split('');
	const strArr = message.split('');
  
	for(let i = 0; i < strArr.length; i++) {
	  let index = alphabet.indexOf(strArr[i]);
	  if(index !== -1) {
		strArr[i] = cipher[index];
	  }
	}
  
	return strArr.join('');
}