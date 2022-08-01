/*
DESCRIPTION:

Build Tower Advanced
Build Tower by the following given arguments:
number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))

Tower block unit is represented as *

Python: return a list;
JavaScript: returns an Array;
Have fun!
*/

// solution 
function towerBuilder(nFloors, nBlockSz) {
	let arr = [];							// an array to return the tower.
	let width = nBlockSz[0];				// block width.
	let height = nBlockSz[1];				// block height.

	let previousFloorWidth = width;			// width of the previous floor.
	let floorWidth = width;					// the floor width (spaces + starts).
	const starsArr = [floorWidth];			// an array to store the number of stars in each floor.

	// get the floor width (spaces + starts of all stores).
	for(let currentFloor = 2; currentFloor <= nFloors; currentFloor++) {
		floorWidth = previousFloorWidth + (width * 2);
		starsArr.push(floorWidth);
		previousFloorWidth = floorWidth;
	}
	
	/* build the tower. */
	// loop for the number of floors given. 
	for(let i = 0; i < nFloors; i++) {
		// loop for the given height. 
		for(let j = 0; j < height; j++) {
			let stars = '*'.repeat(starsArr[i]);
			let spaces = ' '.repeat((floorWidth - starsArr[i]) / 2);
			arr.push(`${spaces}${stars}${spaces}`);
		}
	}

	// return the complete tower. 
	return arr;
}