
function repeatStringNumTimes(str, num) {
  // repeat after me
  var emptyString = '';
  for(var i = 0; i < num; i++) {
     emptyString += str;
  }
  return emptyString;
}

repeatStringNumTimes("abc", 3);
