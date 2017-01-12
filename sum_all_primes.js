
function sumPrimes(num) {
  // create a sum variable that will hold the final sum of all the primes
  var sum = 0;
  //starting at the first prime number 2, iterate up to the num argument 
  for(var i = 2; i <= num; i++) {
  //using an if statement, check whether the current iteration is a prime number using the isPrime function. if it is add it to the sum. follow the function isPrime below for each iteration. 
    if(isPrime(i)) {
     sum += i;
    } 
  }
  return sum;
}



function isPrime(n)  {  
 //if the number is 1, return false because one is not a prime number. this breaks the loop and now the loop in sumPrimes continues onto the next iteration without adding to the sum.
 if (n===1)  {  
    return false;  
 //if the number is 2, return true because 2 is prime. isPrime is now true so it gets added to sum in the sumPrimes function.
 } else if(n === 2) {  
    return true; 
 //if the initializer is less than n, proceed to the if statement and increase the initializer by 1 to cycle through all possible divisors for the current iteration
 } else {  
    for(var x = 2; x < n; x++) {  
 //if the current iteration is divisible by x, it is not prime. break the loop.
      if(n % x === 0) {  
        return false;  
      }  
    }  
    return true;    
 }  
}  
  
sumPrimes(10);