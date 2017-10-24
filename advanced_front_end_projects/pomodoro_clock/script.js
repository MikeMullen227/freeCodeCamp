$(document).ready(function() {
  var clear = 0;
  var interval = 0;
  var minutes = 0; 
  var seconds = 0;
  var alarm = $('#alarm')[0];
  var count1 = parseInt($('#count1').html());;
  var count1ToMinutes= count1 * 60;
  var count2 = parseInt($('#count2').html());
  var count2ToMinutes = count2 * 60;
  var breakTime;
  var sessionTime;
  var start = false;
  var session;
  var breaK;
  var theCount;
  //alarm.play();
  
  function conversion() {
    if(session) {
      theCount = count1ToMinutes;
    } else {
      theCount = count2ToMinutes;
    }
      minutes = Math.floor(theCount / 60);
      seconds = theCount % 60;
       if(seconds < 10) {
        seconds = '0' + seconds;
        }
  }
  
  function breakTimer() {
    //$('#count2').
    
    if (count2ToMinutes === 0) {
      alarm.play(); 
      clear = clearInterval(interval);
      $('#sessionBreak').html('Session');
      sessionTime = setInterval(sessionTimer, 1000);
    } else {
      $('#countDown').html(count2 + ':00');
      count2ToMinutes--;
      session = false;
      conversion();
      $('#countDown').html(minutes + ':' + seconds);
    }
  }
  
  
  function sessionTimer() {
    
    if (count1ToMinutes === 0) {
      alarm.play(); 
      clear = clearInterval(interval);
      $('#sessionBreak').html('Break Time!');
      breakTime = setInterval(breakTimer, 1000);
    } else {
      count1ToMinutes--;
      session = true;
      conversion();
      $('#countDown').html(minutes + ':' + seconds);
    }
 
  };
    
//Buttons
  
 $('#start').click(function() {
   if(!start) {
    interval = setInterval(sessionTimer, 1000);
    start = true;
   }
   
 });

 $('#stop').click(function() {
   clear = clearInterval(interval);
   start = false;
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
  

$('#reset').click(function() {
    $('#count1').html('25');
    $('#count2').html('5');
    $('#countDown').html('25:00');
    clear = clearInterval(interval);
    start = false;
    //count1ToMinutes = count1 * 60;
});

});

