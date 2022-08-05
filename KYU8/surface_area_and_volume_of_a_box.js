/*
DESCRIPTION:
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

// solution
function getSize(width, height, depth) {
	const surfaceArea = (2 * width * depth) + (2 * width * height) + (2 * height * depth);
	const volume = width * height * depth;
	
	return [surfaceArea, volume];
}