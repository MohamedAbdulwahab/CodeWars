/*
DESCRIPTION:

Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// solution
function towerBuilder(nFloors) {
	let spaces;
	let starts;
	const tower = [];
  
	for(let i = 1; i <= nFloors; i++) {
	  spaces = ' '.repeat(nFloors - i);
	  starts = '*'.repeat((i * 2) - 1);
	  tower.push(`${spaces}${starts}${spaces}`);
	}
	return tower;
}