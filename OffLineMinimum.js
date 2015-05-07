/* Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr 
parameter being passed which will be an array of integers ranging from 1...n and the 
letter "E" and return the correct subset based on the following rules. 
The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] 
where the I's stand for integers and the E means take out the smallest integer 
currently in the whole set. When finished, your program should return that new set 
with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] 
then your program should return 4,1,5.  */

function OffLineMinimum(strArr) { 
var line = [];
var offLine = [];
for (var i = 0;  i < strArr.length; i++) {   //iterate through array
    if (strArr[i] === "E") {                 //if parameter to check for "E"
        line = strArr.slice(0,i).sort();   // if E is present sort the array up to the "E" and add to line variable
        offLine += line[0];                  //pulls the lowest integer from array and stores it in offLine
        var index = strArr.indexOf(line[0]); //finds the index location of the lowest integer
        strArr.splice(index,1);              //removes integer from strArr
        i--;                                 // moves loop back one in order to take into account the integer that was removed
        } 
    }
  return offLine.split("").join(",");  // splits array into strings and joins using comma
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OffLineMinimum(readline());   