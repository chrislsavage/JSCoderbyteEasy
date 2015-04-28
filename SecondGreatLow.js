function SecondGreatLow(arr) { 
  arr = arr.sort(function(a,b){return a - b});  //sorts array in ascending order
  console.log(arr);
  var low = arr[0];                              //sets low variable as the first int in index
  var high = arr[arr.length -1];                  // sets high variable as last int in index
  var secondLowest = high;
  var secondHighest = low;
    if (arr.length === 2) {                       // if there are only two integers return them
        return low + " " + high;
    }
for(var i=0; i<arr.length; i++) {          
    var item=arr[i]
    if (item > low && item < secondLowest) {      //tests each integer to see if it is greater than the low and less than the high number
        secondLowest = item;                      // if true sets the array value as the second lowest
                                                  // continues iterating through array till we get to the second lowest number
    }
    if (item < high && item > secondHighest) {    //reverse of above
        secondHighest = item
    }
}
return secondLowest + " " + secondHighest;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline()); 