/*
DESCRIPTION:
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

// solution
function spacify(str) {
	const strArr = str.split('');
	const spacedArr = [];
  
	for(let i = 0; i < strArr.length; i++) {
	  spacedArr.push(strArr[i], ' ');
	}
  
	return spacedArr.join('').slice(0, spacedArr.length - 1);
}