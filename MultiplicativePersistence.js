function MultiplicativePersistence(num) { 
var count = 0; 
      while (num > 9) {  //same as additive persistance only multiplying
          total = 1 //only change as total needs to start with one instead of 0
          num = num.toString().split("");
  for (var i = 0; i<num.length; i++){
   total *= parseInt(num[i]);
   console.log(total);
  }
  num = total;
  console.log(num);
  count ++;
   }
  return count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           
