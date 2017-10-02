$(document).ready(function() {
  var input = '';
  var display = '' 
  var entries = [];
  var currentEntry = ''
  var previousOperator = '';
  var decimal = true;
  
  function allClear() {
    entries.length = 0;
    display = '0';
    $('#display').html(display)
    display = ''
    currentEntry = ''
    previousOperator = ''
    decimal = true;
  }
  
  function calculate() {
    entries.push(currentEntry)
    var total = eval(entries.join('').replace('=', ''));
    $('#display').html(total);
    entries = [];
    entries.push(total);
    console.log(total)
    currentEntry = '';
    display = '';
    }
    
  function clearEntry() {
    display = '0'
    $('#display').html(display);
    display = '';
    currentEntry ='';
    decimal = true;
  }
  
  function digitDisplay() {
    display += input;
    currentEntry += input;
    $('#display').html(display);   
  }
  
  function operation() {
    entries.push(currentEntry)
    currentEntry = input;
    entries.push(input);
    previousOperator = input;
    $('#display').html(display);
    display = '';
    currentEntry = '';  
    decimal = true;
  }
  
  // The main function that performs the logic depending on what button is pressed
  function main() {
     var operatorTest = input == '+' || input == '-' || input == '*' || input == '/';
     var digitTest = input == '0' || input == '1' || input == '2' || input == '3' || input == '4' || input == '5' || input == '6' || input == '7' || input == '8' || input == '9'
     if((digitTest) && (typeof entries[0] === 'number')) {
           allClear()
           currentEntry += input;
           display += input;
           $('#display').html(display);
     } else if((operatorTest) && (currentEntry != '')) {
           operation();
     } else if((operatorTest) && (typeof entries[0] === 'number')) {
           var entryToString = entries.map(String);
           entries = entryToString
           entries.push(input)
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
     console.log(entries)
     console.log(currentEntry)
     console.log(display)
     console.log(previousOperator)
  });  
});