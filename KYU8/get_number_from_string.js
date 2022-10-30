/*
DESCRIPTION:
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:
getNumberFromString(s)
*/

// solution
function getNumberFromString(s) {
	const numArr = [];
  
	for(let i = 0; i < s.length; i++) {
	  if(s[i] == '0' || s[i] == '1' || s[i] == '2' || s[i] == '3' || s[i] == '4' || s[i] == '5' || s[i] == '6' || s[i] == '7' || s[i] == '8' || s[i] == '9') {
		numArr.push(s[i]);
	  }
	}
  
	return Number(numArr.join(''));
}