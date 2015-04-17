var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function SimpleSymbols(str) { 
  str = str.toUpperCase();
  for (i=0; i<str.length; i++) {
      console.log(str[i]);
    if (alphabet.indexOf(str[i]) != -1) {
        console.log(str[i]);
      if (str[i - 1] === "+" && str[i+1] === "+") {
        return true;
      }
    }
  }
      return false;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
