finalStr = "";
function LetterCapitalize(str) { 
finalStr += str[0].toUpperCase();  // makes first letter upper case
	for(i=1; i<str.length; i++) {
	finalStr += str[i];   //creates new string
      if (str[i] === " ") { // if the string has an space 
      	finalStr += str[i+1].toUpperCase(); //the next letter is Capitalized and added to the new string
        i++; //if there is a Capital added we move the loop one index forward
      }
	}
      return finalStr;   
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());  