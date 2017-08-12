function binaryAgent(str) {
  var binaryArray = str.split(' ');
  var charCodeArray = [];
  for(var i = 0; i < binaryArray.length; i++) {
    charCodeArray.push(parseInt(binaryArray[i], 2));
  }
  
  return charCodeArray.map(function(x) {
      return String.fromCharCode(x);
  }).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
