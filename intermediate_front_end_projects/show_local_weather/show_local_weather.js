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
          
          $("#data").html("Latitude: " + lat + 
          "<br>Longitude: " + long); 
          
          // The API with the latitude and longitude 
          var api = "https://api.darksky.net/forecast/" + apiKey + "/" + lat + "," + long;
          
          // JSON call to retrieve data from DarkSky api
          $.getJSON(api, function(data) {
            var city = data.timezone;
            console.log(city);
            console.log(api);
          });
            
            
          });
        }else { 
          $("data").html = "Geolocation is not supported by this browser.";
      } 
  };
  getLocation();
});

