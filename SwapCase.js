var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var swap="";
function SwapCase(str) { 
  for (i=0; i<str.length; i++) {

    if (upper.indexOf(str[i].toUpperCase()) === -1) {   
      swap +=str[i];
  } else if (upper.indexOf(str[i]) != -1) {
    swap += str[i].toLowerCase();
  } else {
      console.log(str[i]);
    swap += str[i].toUpperCase();
      
  }
  }
  return swap; 
         
} 
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
