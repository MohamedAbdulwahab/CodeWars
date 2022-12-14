/*
DESCRIPTION:
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:
alphabetized("The Holy Bible") // "BbeehHilloTy"
*/

// solution
function alphabetized(s) {
	const strArr = s.split(' ');
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	let newStr = '';
  
	if(specialChars.test(s)) {
	  return '';
	}
	
	for(let i = 0; i < strArr.length; i++) {
	  for(let j = 0; j < strArr[i].length; j++) {
		if(/\D/.test(strArr[i][j])) {
		  newStr += strArr[i][j];
		}
	  }
	}
  
	return newStr.split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('');
}