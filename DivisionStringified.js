function DivisionStringified(num1,num2) { 
var num = Math.round(num1/num2).toString();  //divides and rounds the number to the nearest integer 
//and turns it into a string
var numSplit = num.split(""); //creates a new variable with the integers split into an array of strings
console.log(numSplit);
if (num < 1000) {  //no commas needed
  return num;
}
for (var i = num.length - 3; i > 0; i -= 3){  //adds commas ever 3 spaces
    numSplit.splice(i, 0,",");
  }
   numSplit = numSplit.join("");  //joins string back together
    return numSplit;
}