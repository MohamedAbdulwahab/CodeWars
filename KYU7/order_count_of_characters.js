/*
DESCRIPTION:
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// solution 1:
const orderedCount = (text) => {
	const arr = [...new Set([...text])]
	return arr.map(el => [el, [...text].filter(e => e === el).length]);
}

// solution 2: 
const orderedCount = function (text) {
	const counter = {};
	const list = [];
	
	for(let i = 0; i < text.length; i++) {
	  if(!counter.hasOwnProperty([text[i]])) {
		counter[text[i]] = 1;
	  } else {
		counter[text[i]]++;
	  }
	}
  
	for(const property in counter) {
	  list.push([property, counter[property]]);
	}
	
  
	return list;
}