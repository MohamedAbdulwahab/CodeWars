/*
DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// solution
function duplicateEncode(word){
	const counter = {};
	let str = '';
  
	// count how may times each letter has occurred. 
	for(let i = 0; i < word.length; i++) {
	  if(!counter.hasOwnProperty(word[i].toLowerCase())) {
		counter[word[i].toLowerCase()] = 1;
	  } else {
		counter[word[i].toLowerCase()]++;
	  }
	}
  
	// loop over each letter in word.
	for(let i = 0; i < word.length; i++) {
	  // current letter occurred more than once.
	  if(counter[word[i].toLowerCase()] > 1) {
		str += ')';
	  // current letter occurred exactly once.
	  } else {
		str += '(';
	  }
	}
  
	return str;
}