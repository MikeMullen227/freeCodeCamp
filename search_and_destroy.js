
function myReplace(str, before, after) {
  //check if first letter is capitalized
  if(before.charAt(0) === before.charAt(0).toUpperCase()) {
  //if it is, replace the first letter of the string capitalized and then add the rest of the word by slicing
    str = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1, after.length));
  } else {
  //if not capitalized just replace the word   
    str = str.replace(before, after);
  }
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");