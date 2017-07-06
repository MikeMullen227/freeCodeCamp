
function pairElement(str) {
  
  //split str into an array of letters
  var strSplit = str.split('');
  
  //create empty array that will hold the arrays of paired letters
  var paired = [];
  
  //create a function that uses a switch to match each letter with its pair
  var pairs = function(char) {
  
  //once found match with pair and push the array into the paired array
  switch(char) {
      case 'A':
        paired.push(['A', 'T']);
      break;
    
      case 'T':
      paired.push(['T', 'A']);
      break;
      
      case 'C':
      paired.push(['C', 'G']);
      break;
      
      case 'G':
      paired.push(['G', 'C']);
      break;
  }
  };
  //loop through each letter in str and pass into the pairs function
  for(var i = 0; i < str.length; i++) {
    pairs(str[i]);
  }
  return paired;
}

pairElement("GCG");