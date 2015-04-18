var xCount = 0;
var oCount = 0;
function ExOh(str) { 
for (var i=0; i<str.length; i++) {

  if (str[i] === "x") {
    xCount++;
    console.log(xCount);
  } else if  (str[i] === "o") {
    oCount++;
    console.log(oCount);
  } 
}
return (oCount === xCount);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
