/*
DESCRIPTION:
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

Examples:
uniTotal("a") == 97 uniTotal("aaa") == 291
*/

// solution
function uniTotal (string) {
	return string.split('').reduce((acc, current) => acc + current.charCodeAt(), 0);
}