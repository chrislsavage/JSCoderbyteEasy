function TimeConvert(num) { 
  var hours = 0;
  var mins = num % 60;
  console.log(mins);
  if((num - mins) / 60 > 0) {
  hours = (num - mins) / 60;
  } 
 return hours + ":" + mins;
}