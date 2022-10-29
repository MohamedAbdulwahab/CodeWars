/*
DESCRIPTION:
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

// solution
function highestRank(arr) {
	const counter = {};
	const maxArr = [];
	let max = 0;
  
	// count the occurrences of each number in the array.
	for(let i = 0; i < arr.length; i++) {
	  if(!counter.hasOwnProperty(arr[i])) {
		counter[arr[i]] = 1;
	  } else {
		counter[arr[i]]++;
	  }
	}
  
	// find the highest occurrence.  
	for(const property in counter) {
	  if(counter[property] > max) {
		max = counter[property];
	  }
	}
  
	// get the numbers with the highest occurrences and store them in maxArr.
	for(const property in counter) {
	  if(counter[property] === max) {
		maxArr.push(property);
	  }
	}
  
	// return the highest number in maxArr.
	return Math.max(...maxArr);
  }