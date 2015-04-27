/* Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') 
between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number. */

var odd = "13579"
var dashStr = ""
function DashInsert(str) { 
  for (var i=0; i<str.length; i++) { 
    dashStr += str[i];    //adds the number that is in the string to a new string
   if (odd.indexOf(str[i]) != -1 && odd.indexOf(str[i+1]) != -1) {  //checks if the current number and the next are odd numbers
     dashStr += "-";   // if they are then we add a dash to the new string before checking the next number.
   }
}
  return dashStr; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());   