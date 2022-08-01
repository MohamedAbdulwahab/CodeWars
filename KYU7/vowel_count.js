/* 
DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// solution
function getCount(str) {
	let count = 0;
	const regex = /[aeiou]/ig;
	
	for(let i = 0; i < str.length; i++) {
	  if(str[i].match(regex)) {
		count++;
	  }
	}
	return count;
}