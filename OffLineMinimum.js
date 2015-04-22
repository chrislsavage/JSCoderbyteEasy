function OffLineMinimum(strArr) { 
var line = [];
var offLine = [];
for (var i = 0;  i < strArr.length; i++) {
    if (strArr[i] === "E") {
        line = strArr.slice(0,i+1).sort();
        console.log(line);
        offLine += line[0];
        var index = strArr.indexOf(line[0]);
        strArr.splice(index,1);
        i--;
        console.log(strArr);
        } 
    }
    offLine = offLine.split("").join(",");
         return offLine.split().join(',');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OffLineMinimum(readline());   