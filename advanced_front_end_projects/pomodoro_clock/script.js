$(document).ready(function() {
    var now;
    var interval = 0;
    var clear = 0;
    var minutes = 25; 
    var end = new Date().getTime() + minutes*60000;
    var stopped;
    var stoppedTime;
    var newTime;
    var alarm = $('#alarm')[0];
    var count1 = parseInt($('#count1').html());
    var count2 = parseInt($('#count2').html());
    var breakTime;
    //alarm.play();

    //amount of seconds total

    function sessionTimer() {
        if (count1 === 0) {
            //alarm.play(); 
            clear();
            breakTime = setInterval(breakTimer, 1000);
        } else {
            count1--;
        }

        function breakTimer() {
            //$('#count2').
        }
        /*
    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    */

        // Display the result in the element with class=timer"
        $('.timer').html(count1); 
    };


    //Buttons

    $('#start').click(function() {
        interval = setInterval(sessionTimer, 1000);
    });

    $('#stop').click(function() {
        clear = clearInterval(interval);
    });
    //$('#reset').click()

    $('#minus1').click(function() {
        if(count1 > 1) {
            count1--;
            $('#count1').html(count1);
            $('#sessionTime').html(count1 + ':00');
        }
    });

    $('#plus1').click(function() {
        count1++;
        $('#count1').html(count1); 
        $('#sessionTime').html(count1 + ':00');
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
/*

function Timer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function() {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
}

var timer = new Timer(function() {
    alert("Done!");
}, 1000);
    */