$(document).ready(function() {
  var input = '';
  var screen = ''
  var ceHistory = ''; 
  var entries = [];
  var currentEntry = ''
  var previousOperator = '';
  var calculated;
  var previousInput;
  var operators = ['+', '-', '/', '*'];
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  function allClear() {
    entries.length = 0;
    screen = '0';
    $('#display').html(screen)
    screen = ''
    currentEntry = ''
    previousOperator = ''
  }
  
function containsOperator(needle, haystack){ 
  for(var i = 0 , len = needle.length; i < len; i++){
     if($.inArray(needle[i], haystack) !== -1)
       return true;
  }
  return false;
}

 // true

  function calculate() {
        var total = eval(entries.join('').replace('=', ''));
        $('#display').html(total);
        entries = [];
        entries.push(total);
        console.log(total)
        currentEntry = '';
        previousOperator = '';
    }
    
   function clearEntry() {
    screen = '0'
    $('#display').html(screen);
    screen = ''
    entries.pop();     
  }
  
  function digitDisplay() {
    screen += input;
    currentEntry += input;
    $('#display').html(screen);
      
  }
  
  function operation() {
    var lastIndex = entries.length - 1
        
        entries.push(currentEntry)
        currentEntry = input;
        entries.push(input);
        previousOperator = input;
        $('#display').html(screen);
        screen = '';
        currentEntry = '';
       
      
         
  }
  
   function display() {
     var lastArrayEntry = entries.length - 1
    if((input == '+' || input == '-' || input == '*' || input == '/') && 
       (currentEntry != '')) {
        operation();
      
    } else if((input == '+' || input == '-' || input == '*' || input == '/') && (input != previousOperator) && (entries.length > 0)) {
          entries.pop();
          entries.push(input)
          previousOperator = input;
    } else if(input == 'ce') {
        clearEntry();       
    } else if(input == 'ac') {
        allClear();
    } else if(input == '=') {
        calculate();   
    } else if(input == '0' || input == '2' || input == '3' || input == '4' || input == '5' || input == '6' || input == '7' || input == '8' || input == '9') {
        digitDisplay();
    }
  }
   
  
  // A function that takes the value from the button that was clicked, concatenates it to the string screen, and then displays it on the screen
 
  
$('button').click(function(event) {
     input = $(event.target).val();
     display();
     
     //console.log(tempEntries)
     //console.log(entries);
  
     console.log(entries)
     console.log(currentEntry)
     console.log(screen)
     console.log(previousOperator)
  });
  
});