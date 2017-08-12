
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattened = [];
  
  var flatten = function(arg) {
    if(!Array.isArray(arg)) {
      flattened.push(arg);
    } else {
      for(var a in arg) {
          flatten(arg[a]);
        }
    }  
  };
    arr.forEach(flatten);
    return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);