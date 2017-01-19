
function destroyer(arr) {
  // Remove all the values
  
  //get full array values
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  //remove original array
  var placeHolder = [];
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < args.length; j++) {
     if(arr[i] === args[j]) {
          delete arr[i];
       //compare array with values and delete any matches
     }
   
    }
    
  }
  placeholder = arr.filter(falseVar);
   return placeholder;
  //filter falsey values
  function falseVar(value) {
    return Boolean(value);
  }
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);




//more condensed version


function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);