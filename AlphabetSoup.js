function AlphabetSoup(str) { 
    str = str.split("").sort().join("");  //splits the string into an array. Sorts the letters into alphabetical order. Puts them back in a string.
    return str;
}

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());           
