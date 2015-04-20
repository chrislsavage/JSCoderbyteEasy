function ThirdGreatest(strArr) { 
strArr.sort(function(a, b){
  return b.length - a.length; // ASC -> a - b; DESC -> b - a
});  
  console.log(strArr);
  var length = strArr[strArr.length - 1];
  return length;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());  