
function titleCase(str) {
   var wordsArray = str.toLowerCase().split(' ') ;
   var capsArray = wordsArray.map(function(val){
     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
   });

  return capsArray.join(' ');
  
  
  
}

titleCase("I'm a little tea pot");