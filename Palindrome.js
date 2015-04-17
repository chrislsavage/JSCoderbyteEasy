var reverse = '';
function Palindrome(str) { 
str = str.split(" ").join("");
for(var i=str.length - 1; i>-1; i--) {
  reverse += str[i];
  }
return str === reverse;
}

