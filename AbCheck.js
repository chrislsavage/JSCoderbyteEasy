function ABCheck(str) { 
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' && str.charAt(i+4) == 'b') return true;   //checks if the character four spaces ahead is the a or b
    if (str.charAt(i) == 'b' && str.charAt(i+4) == 'a') return true;
  }
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());   