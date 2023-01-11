/**
 * Write a function that when given a URL as a string,
 * parses out just the domain name and returns it as a string. For example:
 * 
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */

function domainName(url) {
  //your code here
  let domainName = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
  
  return domainName;
}
// alternative solution

function anotherDomainName(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0];
}

//one more alternative solution

function oneMoreAnotherDomainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
console.log(oneMoreAnotherDomainName("http://google.com"));
console.log(oneMoreAnotherDomainName("http://united-kingdom.co.jp"));
