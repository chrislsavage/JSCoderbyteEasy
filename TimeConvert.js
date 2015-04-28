function TimeConvert(num) { 
  var hours = 0;
  var mins = num % 60;  //sets minutes to the remainder after deviding by 60
  console.log(mins);
  if((num - mins) / 60 > 0) {    //checks to see if there are hours
  hours = (num - mins) / 60;
  } 
 return hours + ":" + mins;
}