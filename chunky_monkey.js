
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var tempArray = [];
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    if(i % size !== size - 1){
      tempArray.push(arr[i]);
    } else {
      tempArray.push(arr[i]);
      newArray.push(tempArray);
      tempArray = [];
    }
  }
  
  if(tempArray.length !== 0){
    newArray.push(tempArray);
  }
    
 return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);