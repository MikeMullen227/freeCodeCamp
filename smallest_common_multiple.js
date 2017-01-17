
function smallestCommons(arr) {
  //sort the array from highest to lowest 
  arr.sort(function(a, b) {
    return b - a;
  });
  
  var arrRange = [];
  //push the range of values into the empty array arrRange
  for(var i = arr[0]; i >= arr[1]; i--){
    arrRange.push(i);
  }
  
  //create a variable where the least common multiple is stored
  var multiple = 0;
  //create a counter to keep track of the looping
  var count = 0;
  
  
  while(true) {
   //the largest number in the array is the number that will be compared against. it will increase by itself each time the loop is run.
   multiple += arrRange[0];
   //loop through each iteration of the array 
    for(var j = 1; j <arrRange.length; j++) {
   //if a multiple is divisible by the current value in the array, increase the counter by 1   
       if(multiple % arrRange[j] === 0){
        count++;
       }
    }
   //if the counter reaches the end of the array, the common multiple of all the numbers is found
   if(count === arrRange.length - 1){
     return multiple;
   }
    //otherwise the numbers do not share the multiple. reset the counter to start looping from the beginning. the multiple will be increased before starting the loop again and continue increasing until the if statement above is true.
    else {
     count = 0;
   }
  }
  
  
}


smallestCommons([1,5]);
