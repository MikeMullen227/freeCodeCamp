
function addTogether(x, y) {
 
//create a function that loops through array of arguments and checks to see if the type of argument is a number or not
  
var checkNum = function(num) {
  if(typeof num !== 'number') {
      return undefined;
  } else {
     return num;
  }
   
};
  
// need to create an array of the arguments  
var args = Array.prototype.slice.call(arguments);
  
  if(args.length > 1) {
    if(!args.every(checkNum)){
      return undefined;
    } else {
      return args[0] + args[1];
    }
 
  } else {
      var firstArg = args[0];
    
    if(checkNum(firstArg)) {
      return function(secondArg) {
        if(firstArg === undefined || checkNum(secondArg) === undefined) {
          return undefined;
        } else {
          return firstArg + secondArg;
        }
      };
    }
  }

}
addTogether(2)([3]);
