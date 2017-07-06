$(document).ready(function() {
 
//API Key
var apiKey = "2fdc967638822edf6f3803cfc783f9a4";

// Function that gets the users geolocation
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
          
          // variables that store the users latitude and longitude
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
    
          // The API with the latitude and longitude 
          // Needed to use a proxy due to https
          var api = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + apiKey + "/" + lat + "," + long;
          
          // JSON call to retrieve data from DarkSky api
          $.getJSON(api, function(data) {
            // temperature in Fahrenheit
            var tempF = Math.round(data.currently.temperature);
            // temperature in Celsius
            var tempC = Math.round((tempF - 32) / (9/5));
            
            $("#fahr").html(tempF);
            $("#cel").html(tempC);
            
  
          });
          });  
        } else { 
          $("data").html = "Geolocation is not supported by this browser.";
      };
  
  }
  getLocation();
});



/*
  .done(function(data) {
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  })
  .always(function() {
    console.log( "complete" );
*/