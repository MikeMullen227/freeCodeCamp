$(document).ready(function() {
  var input = '';
  var screen = '' 
  var entries = [];
  var currentEntry = ''
  var previousOperator = '';
  
  function allClear() {
    entries.length = 0;
    screen = '0';
    $('#display').html(screen)
    screen = ''
    currentEntry = ''
    previousOperator = ''
  }
  
  function calculate() {
        entries.push(currentEntry)
        var total = eval(entries.join('').replace('=', ''));
        $('#display').html(total);
        entries = [];
        entries.push(total);
        console.log(total)
        currentEntry = '';
        screen = '';
    }
    
   function clearEntry() {
    screen = '0'
    $('#display').html(screen);
    screen = '';
    currentEntry ='';
  }
  
  function digitDisplay() {
    screen += input;
    currentEntry += input;
    $('#display').html(screen);   
  }
  
  function operation() {
        entries.push(currentEntry)
        currentEntry = input;
        entries.push(input);
        previousOperator = input;
        $('#display').html(screen);
        screen = '';
        currentEntry = '';   
  }
  
   function display() {
    var operatorTest = input == '+' || input == '-' || input == '*' || input == '/';
    var digitTest = input == '0' || input == '2' || input == '3' || input == '4' || input == '5' || input == '6' || input == '7' || input == '8' || input == '9'
    if((digitTest) && (typeof entries[0] === 'number')) {
          allClear()
          currentEntry += input;
          screen += input;
          $('#display').html(screen);
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
    } else if(input == 'ce')  {
        clearEntry();       
    } else if(input == 'ac') {
        allClear();
    } else if(input == '=') {
        calculate();   
    } else if(digitTest) {
        digitDisplay();
    }
  }
   
  // A function that takes the value from the button that was clicked, concatenates it to the string screen, and then displays it on the screen

$('button').click(function(event) {
     input = $(event.target).val();
     display();
     console.log(entries)
     console.log(currentEntry)
     console.log(screen)
     console.log(previousOperator)
  });  
});