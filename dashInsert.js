var odd = "13579"
var dashStr = ""
function DashInsert(str) { 
  for (var i=0; i<str.length; i++) {
    dashStr += str[i];
   if (odd.indexOf(str[i]) != -1 && odd.indexOf(str[i+1]) != -1) {
     dashStr += "-";
   }
}
  return dashStr; 
}
DashInsert("77993");