function MeanMode(arr) { 
  arr = arr.sort();
  var sum = 0;
  var modeOccur =  1;
  var count = 1;
  var mode = 0;
for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
    sum += arr[i];
    if (arr[i] === arr[i-1]) { 
        count++;
        if (count > modeOccur) {
            modeOccur = count;
            mode = arr[i];
        }

    }
}
    var average = sum / arr.length;
    if (average === mode) { return 1}
    return 0;

}