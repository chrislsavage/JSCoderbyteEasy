function CountingMinutesI(str) { 
  var numbers = str.match(/(\d+)/g); // puts all numbers in an array and turns them to Integers
  var amPm = str.match(/[a-zA-Z]+/g); // puts am and pm in an array
  var minutes1 = 0;
  var minutes2 = 0;

 for (var i = 0; i<numbers.length; i++) {
     numbers[i] = parseInt(numbers[i]);  //turns array of strings and turns into integers
 }
if (amPm[0] === "am") {             //if the first number is AM then we turn the first hour to 0
      if (numbers[0] === 12) { 
        numbers[0] = 0;
  } else {                                   //if the first number is PM we add 12 to the hour (so hours go to 23)
    numbers[0] = parseInt(numbers[0]) + 12;
  } 
}
if (amPm[1] === "am") {             //same idea could refactor
      if (numbers[2] === 12) { 
        numbers[2] = 0 ;
  } else  {
    numbers[2] = numbers[2] + 12;
  }
}
    minutes1 = (60*parseInt(numbers[0])) + parseInt(numbers [1]);  //multiplies the hours*60 to get minutes in hours and adds minutes
    minutes2 = (60*parseInt(numbers[2])) + parseInt(numbers [3]);
    if (minutes1 > minutes2) {   //special case when the second time is ahead of the first we have to go forward in time rather than backwards
   return ((24*60) - Math.abs(minutes2 - minutes1));
    }
    return Math.abs(minutes2 - minutes1);  // this will return a negative number without the Math.abs method

   
}