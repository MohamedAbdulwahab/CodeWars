/* 
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
	let max;
	let maxArr = [];
	
	for(let i = 0; i < arr.length; i++) {
		max = Math.max(...arr[i]);
		maxArr.push(max);
	}
	return maxArr;
}
