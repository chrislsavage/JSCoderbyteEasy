function CountingMinutesI(str) { 
  var numbers = str.match(/(\d+)/g); // puts all numbers in an array and turns them to Integers
  var amPm = str.match(/[a-zA-Z]+/g); // puts am and pm in an array
  var minutes1 = 0;
  var minutes2 = 0;

 for (var i = 0; i<numbers.length; i++) {
     numbers[i] = parseInt(numbers[i]);
 }
if (amPm[0] === "am") {  
      if (numbers[0] === 12) { 
        numbers[0] = 0;
  } else {
    numbers[0] = parseInt(numbers[0]) + 12;
  } 
}
if (amPm[1] === "am") {  
      if (numbers[2] === 12) { 
        numbers[2] = 0 ;
  } else  {
    numbers[2] = numbers[2] + 12;
  }
}
    minutes1 = (60*parseInt(numbers[0])) + parseInt(numbers [1]);
    minutes2 = (60*parseInt(numbers[2])) + parseInt(numbers [3]);
    if (minutes1 > minutes2) {
   return ((24*60) - Math.abs(minutes2 - minutes1));
    }
    return Math.abs(minutes2 - minutes1);

   
}