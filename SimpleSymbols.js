var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var bool = false
function SimpleSymbols(str) { 
  str = str.toUpperCase();                  
  for (i=0; i<str.length; i++) {
    if (alphabet.indexOf(str[i]) != -1) {  //checks if there is a letter
        console.log(str[i]);
      if (str[i - 1] === "+" && str[i+1] === "+") {  //checks if the letter has a plus on either side
       bool = true;
      } else {
     return false;
      }
    }
  }
      return bool;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());  