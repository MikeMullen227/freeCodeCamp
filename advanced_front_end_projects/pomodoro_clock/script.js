$(document).ready(function() {
    var now;
    var interval = 0;
    var minutes = 25; 
    var end = new Date().getTime() + minutes*60000;
  
  function clear() {
    return clearInterval(interval);
  }
  
    // A function that adds minutes to the timer. Default is set to 25. 
  
  function timer() {
    
    // Get todays date and time
     now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = end - now;
    console.log(distance);
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(minutes);
    console.log(seconds);
    // Need to add a zero to the beginning of seconds when they are single digits
    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    // Display the result in the element with class=timer"
    $('.timer').text(minutes + ':' + seconds);
    
    if (distance < 0) {
    clear();
    }
  }
  
    

  $('#start').click(function() {
    interval = setInterval(timer, 1000);
  });
  
  $('#stop').click(clear);
});



