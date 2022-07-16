/*
DESCRIPTION:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" 
*/


// solution 
function domainName(url) {
	let domain = '';
  
	const firstDot = url.indexOf('.');
	const nextDot = url.indexOf('.', (firstDot + 1));
	const firstSlash = url.indexOf('/');
	const nextSlash = url.indexOf('/', (firstSlash+1));
	const lastSlash = url.lastIndexOf('/');
  
  
	if(url.includes('www') && url.includes('//')) {
	  domain = url.slice(firstDot + 1, nextDot);
	} else if(!url.includes('www') && !url.includes('://')) {
	  domain = url.slice(0, firstDot);
	} else if(url.includes('www') && !url.includes('://')) {
	  domain = url.slice(firstDot + 1, nextDot);
	} else if(!url.includes('www') && url.includes('://') && nextSlash !== lastSlash) {
	  domain = url.slice(nextSlash + 1, firstDot);
	} else if(!url.includes('www') && url.includes('://') && nextSlash === lastSlash) {
	  domain = url.slice(nextSlash + 1, firstDot);
	}
	return domain;
}