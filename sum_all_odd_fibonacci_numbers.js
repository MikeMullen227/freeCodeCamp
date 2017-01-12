
function sumFibs(num) {
  //holds the previous number in the sequence
  var previousNumber = 0;
  //holds the current number in the sequence
  var currentNumber = 1;
  //result variable is a counter that will hold all the odd numbers
  var result = 0;
  //iterate until equal to the value of the argument
  while(currentNumber <= num) {
  //if the currentNumber is not divisible by two, add it to the counter. the counter is now the sum of this number and the following numbers that pass the test.
    if(currentNumber % 2 !== 0) {
      result += currentNumber;
    } 
  //the variable currentNumber is now the sum of the current number and the previous number
      currentNumber += previousNumber;
  //the variable previousNumber is now the difference of the currentNumber and the previous number
      previousNumber = currentNumber - previousNumber;
     
    }
  
  return result;
}

sumFibs(4);