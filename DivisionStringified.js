function DivisionStringified(num1,num2) { 
var num = Math.round(num1/num2).toString();
var numSplit = num.toString().split("");
console.log(numSplit);
if (num < 1000) {
  return num;
}
for (var i = num.length - 3; i > 0; i -= 3){
    numSplit.splice(i, 0,",");
  }
   numSplit = numSplit.join("");
    return numSplit;
}