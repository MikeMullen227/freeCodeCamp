
function sumAll(arr) {
  
  //get smallest number in array
  var min = Math.min(arr[0], arr[1]);
  
  //get largest number in array
  var max = Math.max(arr[0], arr[1]);
 
  //counter to store the added values from the array
  var temp = 0;
  
  //loop over the array and store the accumulated values in temp
  for(var i = min; i <= max; i++) {
       temp += i;
  }
   
  return temp;
}

sumAll([1, 4]);
