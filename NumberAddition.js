function NumberAddition(str) { 
var numbers = str.match(/(\d+)/g);
var sum = 0;
for(var i = 0; i < numbers.length; i++) {
  sum += parseInt(numbers[i]);
}
  return sum; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());    