/*
DESCRIPTION:
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

// solution
function divCon(x) {
	let ints = 0;
	let nonInts = 0;
  
	for(let i = 0; i < x.length; i++) {
	  if(typeof(x[i]) === 'number') {
		ints += x[i];
	  } else {
		nonInts += Number(x[i]);
	  }
	}
  
	return ints - nonInts;
}