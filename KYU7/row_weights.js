/*
Scenario:

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
*/

// solution
function rowWeights(array) {
	let teamOneSum = 0;
	let teamTwoSum = 0;
	
	for(let i = 0; i < array.length; i++) {
		if(i % 2 === 0) {
		  teamOneSum += array[i];
		} else {
		  teamTwoSum += array[i];
		}
	}
	return [teamOneSum, teamTwoSum];
}