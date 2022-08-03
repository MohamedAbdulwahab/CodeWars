/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// solution
function findUniq(arr) {
	const obj = {};
  
	// count how many times each number has occurred 
	for(let i = 0; i < arr.length; i++) {
	  if(!obj.hasOwnProperty(arr[i])) {
		obj[arr[i]] = 1;
	  } else {
		obj[arr[i]]++;
	  }
	}
  
	// return the number that occurred only once.  
	for(let prop in obj) {
	  if(obj[prop] === 1) {
		return Number(prop);
	  }
	}
}