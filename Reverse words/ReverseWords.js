/* 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  let strArray = str.split(' ');

  for(let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].split('').reverse().join('');
  }
  return String(strArray).replace(/,/g, ' ');
}