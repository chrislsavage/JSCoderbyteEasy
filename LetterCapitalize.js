finalStr = "";
function LetterCapitalize(str) { 
finalStr += str[0].toUpperCase();
	for(i=1; i<str.length; i++) {
	finalStr += str[i];
      if (str[i] === " ") {
      	finalStr += str[i+1].toUpperCase();
        i++;
      }
	}
      return finalStr;   
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());  