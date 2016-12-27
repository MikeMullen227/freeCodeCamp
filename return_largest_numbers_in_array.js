function largestOfFour(arr) {
  // You can do this!
  var results = [];
  for(var i = 0; i < arr.length; i++) {
    var largestNumber = 0;
    for(var sb = 0; sb < arr[i].length; sb++) {
      if(arr[i][sb] > largestNumber){
      largestNumber = arr[i][sb];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
