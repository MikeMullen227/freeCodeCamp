$(document).ready(function() {
  var input = '';
  var display = '' 
  var entries = [];
  var currentEntry = ''
  var previousOperator = '';
  var decimal = true;
  var displayLength = true;
  
  // When the AC button is pressed, this function clears all variables
  function allClear() {
    entries.length = 0;
    display = '0';
    $('#display').html(display)
    clearDisplayAndCurrent()
    previousOperator = ''
    decimal = true;
    displayLength = true;
  }
  
  // When the enter button is pressed, this function calculates the total, clears the entries array, and pushes the total to the entries array
  function calculate() {
    entries.push(currentEntry)
    var total = eval(entries.join('').replace('=', ''));
        // Totals larger than 19 characters push past the display. This checks the length and if > 19 slices it to fit.
        if(total.toString().length > 19) {
            var slicedTotal = total.toString().slice(0, 19);
            $('#display').html(slicedTotal);
            entries = [];
            entries.push(slicedTotal);
        } else {
            $('#display').html(total);
            entries = [];
            entries.push(total);
        }
      clearDisplayAndCurrent()
    }
  
  // Resets the current entry and the display
  function clearDisplayAndCurrent() {
    currentEntry = '';
    display = '';
  }
  
  // When the CE button is pressed, changes the display to zero and clears the current entry
  function clearEntry() {
    display = '0'
    $('#display').html(display);
    clearDisplayAndCurrent()
    decimal = true;
    displayLength = true;
  }
  
  // When a digit is entered and passes tests, displays the digit on the screen
  function digitDisplay() {
    if(displayLength == true) {
      display += input;
      currentEntry += input;
      $('#display').html(display); 
      if(display.length > 19) {
          displayLength = false;
      }
    }   
  }
  
  // When an operater is pressed and tests are passed in the main function, the currentEntry and the operator are added to the array Entries. The operator is stored in a variable which can be tested against the next operator pressed so that repeats are not stored in the Entries and if a different type of operator is pressed it will replace the previous one in Entries.
  function operation() {
    entries.push(currentEntry)
    currentEntry = input;
    entries.push(input);
    previousOperator = input;
    $('#display').html(display);
    clearDisplayAndCurrent()
    decimal = true;
    displayLength = true;
  }
  
   // The main function that performs the logic depending on what button is pressed
   function main() {
     var operatorTest = input == '+' || input == '-' || input == '*' || input == '/';
     var digitTest = input == '0' || input == '1' || input == '2' || input == '3' || input == '4' || input == '5' || input == '6' || input == '7' || input == '8' || input == '9'
     // The entries array will have a number instead of a string after the first calculation. This checks if there is a number in Entries whenever a digit is pressed. If no operator was pressed after calculated, Entries is emptied and a new operation begins.
     if((digitTest) && (typeof entries[0] === 'number')) {
           allClear()
           currentEntry += input;
           display += input;
           $('#display').html(display);
       // A digit must be in currentEntry in order to store an operator in Entries
     } else if((operatorTest) && (currentEntry != '')) {
           operation();
       // After a calculation is stored in Entries, if an operator was pressed, the number value in entries is now converted into a string value and replaces the number value, followed by the operator pressed
     } else if((operatorTest) && (typeof entries[0] === 'number')) {
           var entryToString = entries.map(String);
           entries = entryToString
           entries.push(input)
       // If an operator was pressed after another operator, if they are different then the new one will replace the old one
     } else if((operatorTest) && (input != previousOperator) && (previousOperator != '')) {
           entries.pop();
           entries.push(input)
           previousOperator = input;
     } else if(input == '.') {
           if(decimal === true) {
                digitDisplay();
           } 
                decimal = false;   
     } else if(input == 'ce') {
           clearEntry();       
     } else if(input == 'ac') {
           allClear();
     } else if(input == '=') {
           calculate();   
     } else if(digitTest) {
           digitDisplay();
     }
  } 
  
// A function that takes the value from the button that was clicked and passes it to the main function 
$('button').click(function() {
     input = $(this).val();
     main();
  });  
  
});