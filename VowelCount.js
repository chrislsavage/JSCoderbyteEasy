var vowels = "aeiou";
var count = 0;
function VowelCount(str) { 
for (i=0; i<str.length; i++) {
  if (vowels.indexOf(str[i]) != -1) {  //if str[i] is in vowel variable we count up.
  count++;
  }
}
  return count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());                            
