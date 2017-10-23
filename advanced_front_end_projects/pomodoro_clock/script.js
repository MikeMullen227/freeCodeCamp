$(document).ready(function() {
  var now;
  var interval = 0;
  var clear = 0;
  var minutes = 0; 
  var seconds = 0;
  var newTime;
  var alarm = $('#alarm')[0];
  var count1 = parseInt($('#count1').html());
  var count1ToMinutes;
  
  var count2 = parseInt($('#count2').html());
  var breakTime;
  //alarm.play();

  function breakTimer() {
    //$('#count2').
  }
  
  function sessionTimer() {
    
    if (count1ToMinutes === 0) {
      alarm.play(); 
      clear();
      breakTime = setInterval(breakTimer, 1000);
    } else {
      count1ToMinutes--;
      minutes = Math.floor(count1ToMinutes / 60);
      console.log(minutes)
      seconds = count1ToMinutes % 60;
        if(seconds < 10) {
        seconds = '0' + seconds;
        }
      $('#countDown').html(minutes + ':' + seconds);
    }
 
  };
    
//Buttons
  
 $('#start').click(function() {
   interval = setInterval(sessionTimer, 1000);
 });

 $('#stop').click(function() {
   clear = clearInterval(interval);
 });

$('#minus1').click(function() {
  if(count1 > 1) {
    count1--;
    $('#count1').html(count1);
    $('#countDown').html(count1 + ':00');
    count1ToMinutes = count1 * 60;
  }
});

$('#plus1').click(function() {
  count1++;
  $('#count1').html(count1); 
  $('#countDown').html(count1 + ':00');
   count1ToMinutes = count1 * 60;
  console.log(count1ToMinutes)
});

$('#minus2').click(function() {
  if(count2 > 1) {
    count2--;
    $('#count2').html(count2);
  }
});

$('#plus2').click(function() {
  count2++;
  $('#count2').html(count2); 
});
  
});

/*
$('#reset').click(function() {
    $('#count1').html()
});
*/


