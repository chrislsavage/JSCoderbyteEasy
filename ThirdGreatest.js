function ThirdGreatest(strArr) { 
strArr.sort(function(a, b){
  return b.length - a.length; // ASC -> a - b; DESC -> b - a  so in descending order
});  
  return strArr[2]   //returns third largest length
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());  