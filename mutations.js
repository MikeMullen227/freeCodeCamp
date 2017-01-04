
function mutation(arr) {
  
  //lowercase each word in the array
  var word1= arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  //the length of the second word is how many times is needed to loop. loop over second word and compare to the first word.
  for(var i = 0; i < word2.length; i++) {
     if (word1.indexOf(word2[i]) < 0) {
            return false;
     }
    
 } 
     return true;
}

mutation(["hello", "hey"]);

