/*
DESCRIPTION:
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

// solution
function alternateCase(s) {
	let str = '';
	
	for(let i = 0; i < s.length; i++) {
	  if(s[i] === s[i].toUpperCase()) {
		str += s[i].toLowerCase();
	  } else {
		str += s[i].toUpperCase();
	  }
	}
	
	return str;
}