function RunLength(str) { 
  var count = 1;
  var newString = "";
  var newStr = str.split("").sort().splice(0);  //duplicates string
  console.log(newStr);

for (var i = 0; i < newStr.length; i++) {
  if (str[i] === str[i+1]) {
      count++;
      console.log(count);
      } else {
     newString.push(count, newStr[i]); 
     count = 1;
     console.log(newString);
      }

}
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength("aabbcde");  