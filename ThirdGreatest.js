function ThirdGreatest(strArr) { 
strArr.sort(function(a, b){
  return a.length - b.length;
  console.log(strArr);
  var length = strArr[strArr.length - 3];
  return length;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());           
