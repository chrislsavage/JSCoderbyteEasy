function PowersofTwo(num) { 
  for (i=1; i<100; i++) {
    if ( num === Math.pow(2,i)) {  //continues to test exponents of two till 2^100 to see if one matches num
      return true}   
  }
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());    