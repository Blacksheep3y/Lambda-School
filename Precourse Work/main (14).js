// Exercise One: In this exercise you will be creating two functions.

// Function One: Will be called 'multiply'.
// This function will take two parameters, both numbers
// This function will return the two numbers multiplied together.
function multiply(num1, num2){
return num1*num2;  
}
// Function Two: Will be called 'calculator'.
// This function will take three parameters,
// First will be a callback function,
// Second and Third will be numbers.
// This function will return the two numbers passed into the callback function.
function calculator(cb, number1, number2){
  return cb(number1, number2);
}
// NOTE: You can use the multiply function to test the calculator function, but understand that
// other callback functions will be passed into it as a test.
