function LongestWord(sen) { 
  var words = sen.match(/(\w+)/g);  //splits string into array of word strings
  var longest = "";

  for (i=0; i<words.length; i++) {  // iterates through word string array
      if (words[i].length > longest.length) {  //checks if word is longer than current longest word
          longest = words[i]; // if it is, then replaces longest word
      }
  }

  // code goes here  
  return longest; 
         
}