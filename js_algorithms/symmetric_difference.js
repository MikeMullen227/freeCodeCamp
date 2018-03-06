function sym() {
  
  var args = Array.prototype.slice.call(arguments);
  
  function symDiff(arr1, arr2) {
    var unique = [];
    arr1.forEach(function(el) {
       if(arr2.indexOf(el) < 0 && unique.indexOf(el) < 0) {
         unique.push(el);
       }
    });
    
    arr2.forEach(function(el) {
      if(arr1.indexOf(el) < 0 && unique.indexOf(el) < 0) {
        unique.push(el);
      }
    });
    return unique;
  }
  return args.reduce(symDiff);
}
