var longest = "";

function LongestWord(sen) { 
 sen = sen.split(" ");

  for (var i = 0; i<sen.length; i++) {
    if (sen[i].length > longest.length) {
   
    longest = sen[i];
    }
  }
  return longest; 
         
}