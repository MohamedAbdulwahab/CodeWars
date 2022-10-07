/*
DESCRIPTION:
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example:
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

// solution
function generateShape(integer) {
	let str = '';
  
	for(let i = 0; i < integer; i++) {
	  for(let j = 0; j < integer; j++) {
		str += '+';
	  }
	  str += '\n';
	}
  
	return str.slice(0, str.length - 1);
}