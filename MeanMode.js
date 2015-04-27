function MeanMode(arr) { 
  arr = arr.sort();
  var sum = 0;
  var modeOccur =  1;
  var count = 1;
  var mode = 0;
for (var i = 0; i < arr.length; i++) {  //loop through array
    arr[i] = parseInt(arr[i]);  //turn string into integer
    sum += arr[i]; //sum all integers in array
    if (arr[i] === arr[i-1]) {  //check if there is a mode (two repeated integers)
        count++;  
        if (count > modeOccur) { //check if there is a greater mode in the array
            modeOccur = count;  //if so the new occurance of the mode === count
            mode = arr[i]; //sets the mode
        }

    }
}
    var average = sum / arr.length;  // calculates the average
    if (average === mode) { return 1}   // checks if average and mode are =
    return 0;

}