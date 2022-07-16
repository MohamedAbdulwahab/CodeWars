/* 
DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!
*/

// solution
function doubleChar(str) {
	let arr = str.split('');
	
	for(let i = 0; i < arr.length; i++) {
	  arr[i] = arr[i].repeat(2);
	  
	}
	return arr.join('');
}