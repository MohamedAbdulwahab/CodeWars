/*
DESCRIPTION:

John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".
*/

// solution
function meeting(s) {
	const fullName = s.split(';');
	const firstName = [];
	const lastName = [];
	const guestList = [];
  
	// get first name and last name.
	for(let i = 0; i < fullName.length; i++) {
	  // get the first name of each full name and push it to the firstName array.
	  firstName.push(fullName[i].slice(0, fullName[i].indexOf(':')));
	  // get the last name of each full name and push it to the lastName array.
	  lastName.push(fullName[i].slice(fullName[i].indexOf(':') + 1));
	}
  
	// push the full name in the correct format (lastName, firstName)(lastName, firstName) into guestList array.
	for(let i = 0; i < fullName.length; i++) {
	  guestList.push(`(${lastName[i].toUpperCase()}, ${firstName[i].toUpperCase()})`)
	}
  
	// sort the guessList array based on last name, turn it into a string, and return it as a string.
	return guestList.sort().join('');
}