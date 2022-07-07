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