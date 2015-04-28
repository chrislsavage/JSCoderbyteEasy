var reverse = '';
function Palindrome(str) { 
str = str.split(" ").join("");  //removes spaces from string
for(var i=str.length - 1; i>-1; i--) {
  reverse += str[i]; //creates reverse of string
  } 
return str === reverse; //tests if they are equal
}

