
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



// Simpler version

function chunkArrayInGroups(arr, size) {
  // create empty array to push into
  var tempArray = [];
  // create a counter that will stop the loop when larger than the size of the array
  count = 0;
  
  while(count < arr.length) {
    //push groups of two into the array
    tempArray.push(arr.slice(count, count + size));
    count += size;               
  }
  return tempArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);