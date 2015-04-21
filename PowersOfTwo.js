function PowersofTwo(num) { 
  for (i=1; i<100; i++) {
    if ( num === Math.pow(2,i)) {
      return true}
  }
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());    