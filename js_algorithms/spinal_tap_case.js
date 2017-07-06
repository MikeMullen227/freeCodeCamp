
function spinalCase(str) {
  
 //create a regular expression to find spaces and underscores
  var regex = /\s+|_+/g;
  
 //put a space betweeen any lowercase letters immediately followed by an uppercase letter
  var strFixed = str.replace(/([a-z])([A-Z])/g, '$1 $2');
 
 //replace spaces with a dash and lowercase all letters
   return strFixed.replace(regex, '-').toLowerCase();
  
}

spinalCase('This Is Spinal Tap');
