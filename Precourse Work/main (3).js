function exampleExercise(value){
  // !!! This is an example exercise, we will show you how to complete the following exercises here. 
  // !!! There is NO need to write any code for this exercise. 
  // !!! This exercise ia ALREADY complete, Use this as reference to complete the others.
  
  let value2 = 'Dan';
  // In this exercise, you will be given a variable, it will be called: value
  // On the next line create a variable called 'notEqualTo'
  // Using the not operator assign it to a boolean represent value not equal to value2
  let notEqualTo = value2 !== value;
  
  // Please write your answer in the line above.
  return notEqualTo;
}

// ------- Please begin your work below this line: -------
function exerciseOne(value){
  let value2 = true;
  // In this exercise, you will be given a variable, it will be called: value
  // On line 22 create a variable called 'andOperator'
  // Using the logical operators assign it to whether BOTH value AND value2 are true;
  let andOperator = value && value2;
  
  // Please write your answer in the line above.
  return andOperator;
}

function exerciseTwo(value){
  let value2 = false;
  // In this exercise, you will be given a variable, it will be called: value
  // On line 33 create a variable called 'orOperator'
  // Using the logical operators assign it to whether EITHER value OR value2 are true;
  let orOperator = value || value2;
  
  // Please write your answer in the line above.
  return orOperator;
}

function exerciseThree(typeOfPizza){
  let lovesPizza;
  // In this exercise, you will be given a variable, it will be called: typeOfPizza
  // You are also given another variable called: lovesPizza;
  // Using an if/else statement assign lovesPizza to true if typeOfPizza is 'pepperoni', assign it to false if it is 'olives'
  if(typeOfPizza === 'pepperoni'){
    lovesPizza = true;
  } else {
    lovesPizza = false;
  }
  //Just a quick comment I came up with several solutions for this which you already know is possible but technically speaking to evaluate the specific string of 'olives' we would need an elseif statement. Although I recognize that with an else statement every other given value or string that isn't the string 'pepperoni' would be automatically considered false (therefore technically the string 'olives' is evaluated with an else statement but I feel technically since else statements don't use () and instead {} that an elseif statement with () actually evaluates a specific value or string, whereas an else statement does not. ANYHOW I hope my little rant made sense... if not my bad lol.
  // Please write your answer in the line above.
  return lovesPizza;
}

function exerciseFour(age){
  let typeOfLicense;
  // In this exercise, you will be given a variable, it will be called: age
  // You are also given another variable called: typeOfLicense;
  // Using an if/else if/else statement assign typeOfLicense to:
    // 'Full License' if age is greater than or equal to 16,
    // 'Permit' if age is equal to 15,
    // 'None' if age is less than 15
  if(age >= 16){
    typeOfLicense = 'Full License';
  } else if(age === 15){
    typeOfLicense = 'Permit';
  } else {
    typeOfLicense = 'None';
  }
  
  // Please write your answer in the line above.
  return typeOfLicense;
}
