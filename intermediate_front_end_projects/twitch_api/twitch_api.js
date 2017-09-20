$(document).ready(function() {
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
  var clientID = '3dthbe7t8zuydf6zdor03wjrfimxhw';
  
  var twitchURL = 'https://api.twitch.tv/kraken/';
  
  for(var i = 0; i < users.length; i++) {
      
    // First ajax call gets the users information and stores the logo, name and status
    $.ajax({
          type: 'GET',
          url: twitchURL + 'channels/' + users[i],
          headers: {
          'Client-ID': clientID
          },
             success: function(data1) {
               // If there is no logo, use this generic logo
               var logo = data1.logo !== null ? data1.logo : "http://web.vmc3.com/projects/bufs2016/branch/army/logos/NoLogo.jpg";
               var name = data1.display_name; 
               // When the length of the status is too long for the div, slice it to fit
               var status = data1.status.length < 26 ? data1.status : data1.status.slice(0, 23) + '...' ;
               
       // Second ajax call checks to see whether the stream of the user is online or offline. If online show user status, otherwise show online.   
                   $.ajax({
                     type: 'GET',
                     url: twitchURL + 'streams/' + data1.name,
                     headers: {
                       'Client-ID': clientID
                     },
                        success: function(data2) {
                                     if(data2.stream === null) {
                                        $('#userInfo').prepend('<div class="row">' + '<div class="col-md-4" id="logo">' + '<img src=' + logo + '>' + '</div>' + '<div class="col-md-4" id="user">' + '<a href="https://www.twitch.tv/' + name + '" target="_blank">' + name + '</a>' + '</div>' + '<div class="col-md-4" id="status">Offline</div>' + '</div>');
                                    } else {
                                        $('#userInfo').prepend('<div class="row">' + '<div class="col-md-4" id="logo">' + '<img src=' + logo + '>' + '</div>' + '<div class="col-md-4" id="user">' + '<a href="https://www.twitch.tv/' + name + '" target="_blank">' + name + '</a>' +'</div>' + '<div class="col-md-4" id="Status">' + status + '</div>' + '</div>');
                                      // Shows the rest of the status when hovering over it 
                                       $("#Status").hover(function() {
                                          $(this).html(data1.status);
                                           }, function() {
                                          $(this).html(status);
                                        })
                                    }   
                                } 
                   });
            }
    });   
  };
});
           
