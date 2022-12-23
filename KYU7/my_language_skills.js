/*
DESCRIPTION:
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples:
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

// solution
function myLanguages(results) {
	const objArr = [];
	const scores = [];
	
	// convert obj to an array.
	for(const property in results) {
	  if(results[property] >= 60) {
		objArr.push([property, results[property]]); 
	  } 
	}
	
	// sort the array in descending order.
	const sorted = objArr.sort((a, b) => b[1] - a[1]);
	
	// push the languages into the scores array. 
	for(let i = 0; i < sorted.length; i++) {
	  scores.push(sorted[i][0]);
	}
	
	// return the languages.
	return scores;
}