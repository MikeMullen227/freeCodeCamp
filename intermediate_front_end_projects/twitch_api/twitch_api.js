$(document).ready(function() {
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
  var clientID = '3dthbe7t8zuydf6zdor03wjrfimxhw';
  
  var twitchURL = 'https://api.twitch.tv/kraken/';
  

      for(var i = 0; i < users.length; i++) {

        $.ajax({
              type: 'GET',
              url: twitchURL + 'channels/' + users[i],
              headers: {
              'Client-ID': clientID
              },
                 success: function(data1) {
                     console.log(data1);
                   var logo = data1.logo !== null ? data1.logo : "http://web.vmc3.com/projects/bufs2016/branch/army/logos/NoLogo.jpg";
                   var name = data1.display_name;  
                   var status = data1.status;

                       $.ajax({
                         type: 'GET',
                         url: twitchURL + 'streams/' + data1.name,
                         headers: {
                           'Client-ID': clientID
                         },
                            success: function(data2) {
                                         if(data2.stream === null) {
                                            $('#userInfo').prepend('<div class="row">' + '<div class="col-md-4" id="logo">' + '<img src=' + logo + '>' + '</div>' + '<div class="col-md-4" id="user">' + name + '</div>' + '<div class="col-md-4" id="status">Offline</div>' + '</div>');
                                         } else {
                                            $('#userInfo').prepend('<div class="row">' + '<div class="col-md-4" id="logo">' + '<img src=' + logo + '>' + '</div>' + '<div class="col-md-4" id="user">' + name + '</div>' + '<div class="col-md-4" id="status">' + status + '</div>' + '</div>');
                                         }
                                      }  
                       });
                    }    
        });
      };

});
