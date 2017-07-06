
function whatIsInAName(collection, source) {
  // function compares the collection with selection needed an outputs it
  var arr = collection.filter(function(item){
  // use filter to return true values
    for(var i in source) {
     
  // check values in source and compare with item
      if(source[i] !== item[i]) {
        return false;
      }
    }
  
    return true;
   
  });
 
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
