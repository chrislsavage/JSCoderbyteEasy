maxNum = -1;
maxIndex = -1;
sum = 0;
function ArrayAdditionI(arr) { 
for (var i = 0; i<arr.length; i++) {
	if (arr[i] > maxNum) {
    maxNum = arr[i];
    maxIndex = i;
    }
	}
for (var y = 0; y<arr.length; y++) {
    if (y === maxIndex) { }
    else { sum = sum + arr[y];}
    
}
console.log(maxNum);
console.log(sum);
return (sum === maxNum);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());           
