/*
DESCRIPTION:
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:
Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

// solution
function gordon(a) {
	const strArr = a.toUpperCase().split('');
  
	for(let i = 0; i < strArr.length; i++) {
	  if(strArr[i] === 'A') {
		strArr[i] = '@';
	  } else if(strArr[i] === 'E' || strArr[i] === 'I' || strArr[i] === 'O' || strArr[i] === 'U') {
		strArr[i] = '*';
	  }
	}

	return strArr.join('').replace(/\s/ig, '!!!! ') + '!!!!';
}