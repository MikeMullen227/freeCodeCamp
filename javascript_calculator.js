$(document).ready(function() {
  var input = '';
  var screen = ''
  var screenCurrent = '';
  var ceHistory = ''; 
  var entries = [];
  var operator = '';
  var calculated;
    
    
  function allClear() {
    entries.length = 0;
    screen = '0';
    $('#display').html(screen)
    screen = ''
    screenCurrent = ''
  }
  
  function clearEntry() {
    screen = '0'
    $('#display').html(screen);
    screen = ''
          
  }
  
  function calculate() {
    var total = eval(entries.join('').replace('=', ''));
    $('#display').html(total);
    entries = [];
    entries.push(total);
    //calculated = calculated.toString();
  }
    
  // A function that takes the value from the button that was clicked, concatenates it to the string screen, and then displays it on the screen
  function display() {
    if(input == '+' || input == '-' || input == '*' || input == '/') {
        $('#display').html(screenCurrent);
        screen = '';
        screenCurrent = '';
    } else if(input == 'ce') {
         clearEntry();       
    } else if(input == 'ac') {
        allClear();
    } else if(input == '=') {
        calculate();
    }
      else {
        screen += input;
        screenCurrent += input;
        $('#display').html(screen);
      }
    
   
    
       if(input == '0') {
         input = ''
       }   
  }
   
  
$('button').click(function(event) {
     input = $(event.target).val();
    if(input != 'ce') {
      entries.push(input);
    } else {
      entries.length = 0;
    }
     display();
     console.log(entries);
     console.log(screenCurrent)
  });
  
});