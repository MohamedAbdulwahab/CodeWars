/*
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples:
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

// solution
function remove(s, n){
	let strArr = s.split('');
  
	for(let i = 0; i < strArr.length; i++) {
	  if(s[i] === '!' && n > 0) {
		strArr[i] = '';
		n--;
	  }
	}
  
	return strArr.filter((e) => e !== '').join('');
}