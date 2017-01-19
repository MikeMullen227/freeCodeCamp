
function uniteUnique(arr) {
  //create an empty array to store the final values
  var finalArray = [];
  //iterate through the length of arguments since the amount of arguments is unknown
  for(var i = 0; i < arguments.length; i++) {
  //iterate through each index of current argument
    for(var j = 0; j < arguments[i].length; j++) {
  //if the value at the current index is not found in finalArray, push it into finalArray
      if(finalArray.indexOf(arguments[i][j]) < 0) {
        finalArray.push(arguments[i][j]);
      }
    }
  }
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);