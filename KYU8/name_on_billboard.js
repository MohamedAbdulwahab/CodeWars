/*
DESCRIPTION:
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

Note: You can NOT use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/

// solution
function billboard(name, price = 30){
	let total = 0;
	
	for(let i = 0; i < name.length; i++) {
	  total += price;
	}
	
	return total;
} 