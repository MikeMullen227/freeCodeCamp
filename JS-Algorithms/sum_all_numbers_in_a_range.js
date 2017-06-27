
function sumAll(arr) {
  small = Math.min(arr[0], arr[1]);
  big = Math.max(arr[0], arr[1]);
  array = [];
  for(var i = small; i <= big; i++) {
    array.push(i);
  }
  return array.reduce(function(acc, val) {
    return acc + val;
  });
}

sumAll([1, 4]);
