var xCount = 0;
var oCount = 0;
function ExOh(str) { 
for (var i=0; i<str.length; i++) {
  if (str[i] === "x") {
    xCount++;
  } else if  (str[i] === "o") {
    oCount++;
  } 
}
return (oCount === xCount);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
