/*
DESCRIPTION:
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

// solution
function mxdiflg(a1, a2) {
	// edge case: empty arrays. 
	if(a1.length === 0 || a2.length === 0) {
	  return -1;
	}
	
	// get the lengths of all the elements in a1.
	const lengthA1 = a1.map((e) => e.length);
	
	// get the lengths of all the elements in a2.
	const lengthA2 = a2.map((e) => e.length);
	
	// return max(abs(length(x) − length(y))).
	return Math.max(Math.max(...lengthA1) - Math.min(...lengthA2), Math.max(...lengthA2) - Math.min(...lengthA1));
}