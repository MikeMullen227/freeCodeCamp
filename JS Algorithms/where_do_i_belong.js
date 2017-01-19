
function getIndexToIns(arr, num) {

   var count = 0;
  //counter variable for results
   for(var i = 0; i < arr.length; i++) {
     //if array value - number returns negative it is a smaller number
     if(arr[i] - num < 0) {
       count += 1;
     }
  
   }
   
  return count;
  

}

getIndexToIns([5, 3, 20, 3], 5);
