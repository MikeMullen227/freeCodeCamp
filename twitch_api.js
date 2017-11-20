$(document).ready(function() {
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
  var clientID = '3dthbe7t8zuydf6zdor03wjrfimxhw';
  
  //var url = 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?';
  /*
  $.getJSON('https://api.twitch.tv/kraken/streams/esl_sc2?clientID=' + client_id).done(function(data) {
      //console.log(data);
    if(data.stream === null) {
      $('#status').html('Offline');
    } else {
      $('#status').html('Online');
    }
  })
 */
  
  for(var i = 0; i < users.length; i++) {

    $.ajax({
          type: 'GET',
          url: 'https://api.twitch.tv/kraken/channels/' + users[i],
          headers: {
          'Client-ID': clientID
          },
             success: function(data) {
                 console.log(data);
                  if(data.stream === null) {
                      $('#fccStatus').html('Offline')
                  } else {
                      $('#fccStatus').html('Online')
                  };
             }, 
             error: function(er) {
               
             }
      });
    
  };
  
});
