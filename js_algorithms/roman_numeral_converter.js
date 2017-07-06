
function convertToRoman(num) {
  //create roman numeral array
  var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  //create decimal equivalent array
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  //create empty string to place roman numeral answer
  var romanized = '';
  
  //loop over decimal value array
  for(var i = 0; i < decimalValue.length; i++) {
  //find first instance of when num is larger than index of decimal value array  
    while(num >= decimalValue[i]) {
  //add the roman numeral version of that number to the romanized string
        romanized += romanNumerals[i];
  //subtract that decimal value from num and repeat loop
        num -= decimalValue[i];
      }
  }

  
 return romanized;
}

convertToRoman(36);
