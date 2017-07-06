 function largestOfFour(arr) {
  largest = [];
  for(var i = 0; i < arr.length; i++) {
    max = 0;
    for(var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    largest.push(max);
  }
  return largest; 
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

