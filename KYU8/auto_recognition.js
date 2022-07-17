/* 
DESCRIPTION:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/


// solution 
function correct(string) {
	const corrected = [];
	
	for(let i = 0; i < string.length; i++) {
	  if(string[i] === '5') {
	  corrected.push('S');
	  } else if(string[i] === '0') {
	  corrected.push('O');
	  } else if(string[i] === '1') {
	  corrected.push('I');
	  } else {
	  corrected.push(string[i]);
	  }
	}
	return corrected.join('');
}