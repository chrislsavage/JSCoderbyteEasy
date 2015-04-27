function ArrayAdditionI(arr) { 
var most = arr.sort(function(a,b) {return a-b;}).pop();
var sum = 0;
  console.log(most);
 for (var i = 0; i < arr.length; i++) {
     sum += arr[i];
     if (sum === most) {
         return true;
     }
     for(var j=0; j < arr.length; j++) {
         console.log(arr[j], arr[i]);
         if (j != i ) {
             sum += arr [j];
             console.log(sum);
             if (sum === most) {
         return true;
            }
         }
    }
    for(var k=0; k < arr.length; k++) {
         if (arr[k] != arr[i] ) {
             sum += arr [k];
             console.log(sum);
             if (sum === most) {
         return true;
            }
         }
    }
    sum = 0
 }
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());           
