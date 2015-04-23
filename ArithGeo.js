var result = -1
function ArithGeo(arr) { 
var arithInterval = arr[1] - arr[0];
var geoInterval = arr[1] / arr[0];
for (var i=0; i< arr.length - 1; i++)  {
if (arr[i] + arithInterval === arr[i + 1]) {
  result = "Arithmetic";
}
else if (arr[i] * geoInterval === arr[i + 1]) {
  result = "Geometric";
}else { result = -1 }
}
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());   