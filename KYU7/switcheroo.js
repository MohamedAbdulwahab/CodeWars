/*
DESCRIPTION:
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// solution
function switcheroo(x) {
	const strArr = x.split('');
	
	const switched = strArr.map((e) => {
	  if(e === 'a') {
		return e = 'b';
	  } else if(e === 'b') {
		return e = 'a';
	  } else {
		return e = e;
	  }
	});
  
	return switched.join('');
}