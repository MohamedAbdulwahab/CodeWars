/*
DESCRIPTION:
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/

// solution
function dataReverse(data) {
	const arrStr = data.join('');
	const arr = [];
	const reversedArr = [];
  
	// push each 8-digits as a single string into arr.
	for(let i = 0; i < arrStr.length; i += 8) {
	  arr.push(arrStr.slice(i, i+8));
	}
  
	// loop through the arr starting from the last string (from the right).
	for(let i = arr.length - 1; i >= 0; i--) {
	  // loop through each string from the first digit (from the left).
	  for(let j = 0; j < arr[i].length; j++) {
		// push each digit to the reversedArr array. Do that for al the strings. 
		reversedArr.push(Number(arr[i][j]));
	  }
	}
  
	// return the 'reversed' array.
	return reversedArr;
}