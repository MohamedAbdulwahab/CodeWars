/*
DESCRIPTION:
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

// solution
function uefaEuro2016(teams, scores) {
	let winner;
  
	if(arguments[1][0] > arguments[1][1]) {
	  winner = 0;
	} else if (arguments[1][0] < arguments[1][1]) {
	  winner = 1;
	} else {
	  winner = -1;
	}
  
	return ((winner === 0) || (winner === 1)) ? `At match ${arguments[0][0]} - ${arguments[0][1]}, ${arguments[0][winner]} won!` : `At match ${arguments[0][0]} - ${arguments[0][1]}, teams played draw.`
}