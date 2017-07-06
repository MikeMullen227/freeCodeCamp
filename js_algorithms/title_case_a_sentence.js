
//better solution

function titleCase(str) {
  caps = str.toLowerCase().split(' ').map(function(x) {
    return x[0].toUpperCase() + x.slice(1, x.length);
  
  }); 
  return caps.join(' ');
}

titleCase("sHoRt AnD sToUt");


//original solution

function titleCase(str) {
   var wordsArray = str.toLowerCase().split(' ') ;
   var capsArray = wordsArray.map(function(val){
     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
   });

  return capsArray.join(' ');
  
  
  
}

titleCase("I'm a little tea pot");