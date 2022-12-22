/*
DESCRIPTION:
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Examples:
The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/

// solution
function findDeletedNumber(arr, mixArr) {
	const sortedMix = mixArr.sort((a, b) => a - b);
	let missing = 0;
	
	for(let i = 0; i < arr.length; i++) {
	  if(sortedMix[i] !== arr[i]) {
		missing = arr[i];
		break;
	  }
	}
	
	return missing;
}