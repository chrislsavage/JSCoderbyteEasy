function SecondGreatLow(arr) { 
  arr = arr.sort(function(a,b){return a - b});
  console.log(arr);
  var low = arr[0];
  var high = arr[arr.length -1];
  var secondLowest = high;
  var secondHighest = low;
    if (arr.length === 2) {
        return low + " " + high;
    }
for(var i=0; i<arr.length; i++) {
    var item=arr[i]
    if (item > low && item < secondLowest) {
        secondLowest = item;
    }
    if (item < high && item > secondHighest) {
        secondHighest = item
    }
}
return secondLowest + " " + secondHighest;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline()); 