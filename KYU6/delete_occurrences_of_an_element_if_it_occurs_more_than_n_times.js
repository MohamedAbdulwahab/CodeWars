/*
DESCRIPTION:
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task:
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

// solution
function deleteNth(arr, n) {
	const newArr = [];
	const counter = {};
	
	// loop through all the elements of arr.
	for(let i = 0; i < arr.length; i++) {
		// first time seeing this element.
		if(!counter.hasOwnProperty(arr[i])) {
			// store the element in the counter obj with count = 1.
			counter[arr[i]] = 1;
			// push the element to newArr.
			newArr.push(arr[i]);
		// the element has been seen before.
		} else {
		// make sure the element has occurred less than n times.
		if(counter[arr[i]] < n) {
			// push the element to the new arr.
			newArr.push(arr[i]);
		}
		// increase the element occurrence count.
		counter[arr[i]]++;
		}
	}
	// return the new arr.
	return newArr;
  }