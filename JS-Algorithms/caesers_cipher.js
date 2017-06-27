
function rot13(str) { // LBH QVQ VG!
 //split the string into individual letters in an array
   str = str.split('').map(cipher).join('');
  return str;
}
  
  function cipher(letter) {
    var symbolregex = /[^a-zA-Z]/g;
    if(symbolregex.test(letter)) {
      return letter;
    }
    var codeAscii = letter.charCodeAt(0);
    if(codeAscii > 77) {
      codeAscii -= 13;
    } else {
      codeAscii += 13;
    }
  
  return String.fromCharCode(codeAscii);
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");
