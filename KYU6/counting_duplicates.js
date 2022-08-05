/*
DESCRIPTION:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 (# no characters repeats more than once)
"aabbcde" -> 2 (# 'a' and 'b')
"aabBcde" -> 2 (# 'a' occurs twice and 'b' twice (`b` and `B`))
"indivisibility" -> 1 (# 'i' occurs six times)
"Indivisibilities" -> 2 (# 'i' occurs seven times and 's' occurs twice)
"aA11" -> 2 (# 'a' and '1')
"ABBA" -> 2 (# 'A' and 'B' each occur twice)
*/

// solution
function duplicateCount(text) {
	const strArr = text.split('');
	const counter = {};
	let repeat = 0;
  
	// loop over text array and find the occurrences of each letter.
	for(let i = 0; i < text.length; i++) {
	  // distinct case-insensitive === toLowerCase().
	  if(!counter.hasOwnProperty(strArr[i].toLowerCase())) {
		// first occurrence? count is 1.
		counter[strArr[i].toLowerCase()] = 1;
	  } else {
		// not first occurrences? increase count by 1.
		counter[strArr[i].toLowerCase()]++;
	  }
	}
  
	// loop over the counter object.
	for(let prop in counter) {
	  // find the elements that occured more than once. 
	  if(counter[prop] > 1) {
		// increase the repeat count by 1.
		repeat++;
	  }
	}
  
	// return the repeat count.
	return repeat;
}