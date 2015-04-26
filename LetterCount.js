var count = 0;
var currentWord = "";
var mostLetters = "";
function LetterCountI(str) { 
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
        var currentWord = words[i].split("").sort();
        console.log(currentWord);
      for (var j = 0; j < currentWord.length; j++) {
          if (currentWord[j] === currentWord[j+1]) {
              mostLetters = currentWord.splice(j,1);
              if (mostLetters.length > count)
              answer = words[i];
              console.log(mostLetters);
              count++
      }
     
  }
 
  }


if (count === 0) {return -1;} 
  return answer; 