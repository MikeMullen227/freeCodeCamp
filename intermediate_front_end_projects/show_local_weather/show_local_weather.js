$(document).ready(function() {
var lat, long, darkskyApiKey, googleApiKey, darkskyApi, googleApi, tempF, tempC, weatherCondition, wind, city, state

    //Darksky API key                                                              
    darkskyApiKey = "2fdc967638822edf6f3803cfc783f9a4";

    // Google API key
    googleApiKey = "AIzaSyDIUnMNzcKKAReAk2lr99CKwyRVpYI7bm0";
  
// Function that gets the users geolocation
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
          
          // variables that store the users latitude and longitude
           lat = position.coords.latitude;
           long = position.coords.longitude;
    
          // The Darksky API with the latitude and longitude 
          // Needed to use a proxy due to https
           darkskyApi = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyApiKey + "/" + lat + "," + long;
          // Google api to get city name using lat and long variables
           googleApi = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=" + googleApiKey
          
          // JSON call to retrieve data from DarkSky api
          $.getJSON(darkskyApi, function(data) {
            // temperature in Fahrenheit
            tempF = Math.round(data.currently.temperature);
            // temperature in Celsius
            tempC = Math.round((data.currently.temperature - 32) / (9/5));
            // current weather condition
            weatherCondition = data.currently.summary;
            // windspeed
            wind = data.currently.windSpeed.toFixed(1);
            
            
            $("#temp").html(tempF + " &degF");
            $("#condition").html(weatherCondition);
            $("#wind").html(wind + " mph");
           
            //Change Background image depending on temperature
            if(tempF > 80) {
              $(".bg").css("background-image", "url(https://rampages.us/halawadhi96/wp-content/uploads/sites/5047/2015/02/nature-landscape-alluring-picture-hot-desert-sun-hd-wallpaper-background-hot-as-sun-desert-song-lyrics-hot-as-sun-desert-song-desert-hot-springs-sunshine-cafe-730x456.jpg)");  
            } else if(tempF > 60) {
              $(".bg").css("background-image", "url(https://cdn.cloudpix.co/images/sunny/sunny-day-wallpapers-hd-pulse-wallpaper-sunny-spring-day-in-the-field-desktop-background-direct-hd-download-for-iphone-ipad-borders-free-naruto-mobile-wallpaper-c50cbab87884248d9173b8c1f8e85f83-large-1261613.jpg)");
            } else if(tempF > 40) {
              $(".bg").css("background-image", "url(https://storage.googleapis.com/mapio-net-pic/15528401.jpg)");
            } else {
              $(".bg").css("background-image", "url(http://cdn.wallpapersafari.com/13/54/jSLnZq.jpg)");
          }
            // When temp button is clicked the Celsius and Fahr classes get toggled
            $("li[id='temp']").on('click', function(){ 
                $("li[id='temp']").toggleClass("celsius");
                $("li[id='temp']").toggleClass("fahrenheit");
                // If the temp button has the Celsius class, change the temp to Celsius
                if ($(this).hasClass('celsius')) {
                  $("li[id='temp']").html(tempC + " &degC");
                // Otherwise change to Fahr
                } else {
                  $("li[id='temp']").html(tempF + " &degF");
                }   
             }); 
          }); 
            
          // API call to google to get the city and state  
          $.getJSON(googleApi, function(data2) {
                  city = data2.results[6].formatted_address;
               // state = data2.results[0].address_components[4].long_name;
                
                $("#city").html(city); 
          });  
          });  
        } else { 
          $("data").html = "Geolocation is not supported by this browser.";
      };        
  }
});


