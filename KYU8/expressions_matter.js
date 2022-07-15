/* 
Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.
*/

// solution
function expressionMatter(a, b, c) {
	const sum = a + b + c;
	const prodSumPar = a * (b + c);
	const product = a * b * c;
	const sumProdNoPar = a + b * c;
	const sumProdPar = (a + b) * c;
	
	return Math.max(sum, prodSumPar, product, sumProdNoPar, sumProdPar);
}