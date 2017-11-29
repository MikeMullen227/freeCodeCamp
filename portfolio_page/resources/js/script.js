$(document).ready(function() {
    
    $('.js--section-skills').waypoint(function(direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
            $('nav').removeClass('navbar-dark');
        } else {
            $('nav').removeClass('sticky');
            $('nav').addClass('navbar-dark');
        }
    }, {
           offset: '190px;'   
    });
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })
    */
});