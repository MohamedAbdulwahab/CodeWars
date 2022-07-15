/* 
DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/


// solution 
function isIsogram(str){
	const arr = [];
  
	for(let i = 0; i < str.length; i++) {
	  if(!arr.includes(str[i].toLowerCase()) && !arr.includes(str[i].toUpperCase())) {
	  	arr.push(str[i]);
	  } else {
	  return false;
	  }
	}
	return true;
}