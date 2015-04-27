var count = 0;
var currentWord = "";
var mostLetters = "";
function LetterCountI(str) { 
  var words = str.split(" ");  //splits the string into array of words and removes the spaces between 
  for (var i = 0; i < words.length; i++) {   //loops through the words
        var currentWord = words[i].split("").sort();  //splits the word into an alphabetical array of letters
        console.log(currentWord);
      for (var j = 0; j < currentWord.length; j++) {  //now we are looping through each word's letters
          if (currentWord[j] === currentWord[j+1]) {   // if the letter matches upcoming
              mostLetters = currentWord.splice(j,1); //we create a new array that has that letter in it every time it repeats
              if (mostLetters.length > count) {  //checks if  the length of the new  array is greater than count
              answer = words[i];   //if it is then the answer is the word that we are iterating through
              count++}  //adds one to the count to make it so that the word has to have more repeated letters than have already occured
      }
     
  }
 
  }


if (count === 0) {return -1;}  //if we don't have any repeating letters the count will still be at 0
  return answer; 
}