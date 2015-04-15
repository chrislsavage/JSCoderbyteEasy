function PrimeTime(num) { 

if (num === 1) {
return false;
} 
for (i=2; i<num; i++) { if (num % i === 0) {
  return false;
} else {
  return true;
}
}      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());   