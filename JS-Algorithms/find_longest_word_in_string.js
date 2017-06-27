function findLongestWord(str) {
 var splitString = str.split(' ');
 var maxLength = 0;
 for(var i = 0; i < splitString.length; i++) {
   if(splitString[i].length >= maxLength) {
     maxLength = splitString[i].length;
   }
   
 }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
