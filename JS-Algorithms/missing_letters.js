
function fearNotLetter(str) {
 
 //loop through str to store the ascii value of the current letter in the variable code.
  for(var i = 0; i < str.length; i++) {
   var code = str.charCodeAt(i);
 //if the value of code is not equal to the ascii value of the first index plus the current index, return the missing letter
  if(code !== str.charCodeAt(0) + i) {
    return String.fromCharCode(str.charCodeAt(0) + i);
  } 
  }
  return undefined;
}

fearNotLetter("abce");
