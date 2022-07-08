/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  let strSplit = '';
  if(str.includes('-')) {
    strSplit = str.split('-');
  } else if(str.includes('_')) {
    strSplit = str.split('_');
  }

  for(let i = 1; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i][0].toUpperCase() + strSplit[i].substring(1);
  }
                                     
  return String(strSplit).replace(/,/g, '');
}