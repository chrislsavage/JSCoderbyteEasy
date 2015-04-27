var count = 0;
function AdditivePersistence(num) { 
      while (num > 9) {  //checks if the number is one character
          total = 0
          num = num.toString().split("");  //splits string into separate nubmers
  for (var i = 0; i<num.length; i++){
   total += parseInt(num[i]);  //adds all the nubmers in the array together into a new number
  }
  num = total; //places the new number into the while loop
  count ++; //counts how many times we go through the while loop
   }
  return count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());    