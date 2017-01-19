
function convertHTML(str) {
   
  var splitString = str.split('');
  for(var i = 0; i < splitString.length; i++) {
    switch(splitString[i]) {
      case '<':
        splitString[i] = '&lt;';
        break;
        
      case '>':
        splitString[i] = '&gt;';
        break;
        
      case '&':
        splitString[i] = '&amp;';
        break;
        
      case '"':
        splitString[i] = '&quot;';
        break;
        
      case "'":
        splitString[i] = '&apos;';
        break;
    }
  }
        
  return splitString.join('');
}

convertHTML("Dolce & Gabbana");