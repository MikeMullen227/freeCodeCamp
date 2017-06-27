
function diffArray(arr1, arr2) {
  var newArr = [];
  // Merge the two arrays
 var combinedArray = arr1.concat(arr2);
  
  //Compare the combinedArray with the two original arrays and if the value is not found in both original arrays filter it out.
 var filteredArray = combinedArray.filter(function(value) {
    if(arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1)
      newArr.push(value);
 });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);