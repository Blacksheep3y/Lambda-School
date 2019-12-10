function exerciseOne(){
  // Exercise One: In this exercise you are given an object called 'mathHelpers'
  // Within mathHelpers, create a method called 'double'
  // This method should take one parameter, a number, 
  // and it should return that number multiplied by two.
  let mathHelpers = {
    // Create double method in here.
    double: function(num){
    let product = num * 2;
    return product; // I realized after looking at the solution I could have just returned num*2.
    } 
  };
  //I just want to say I had a lot of trouble with this exercise, otherwise I would have already finished it two days ago... but I just went back through the lessons in the course and figured it out step by step by paying closer attention and theorizing lol.
  //I hope this is the way to actually set a value for num by creating a variable as such, let answer = mathHelpers.double(10);
  return mathHelpers;
}

function exerciseTwo(userObj){
// Exercise Two: You will be given an object called 'userObj'
// userObject will already have a key on it called 'name'
// Add a method to userObj, called 'greeting'.
// Using the keyword 'this', the greeting method should return the following string:
// 'Hi, my name is ' and the users name.
// eg: If userObj has a name: 'Dan', greeting should return: Hi, my name is Dan'
// NOTE: DO NOT create a new object.
// NOTE: DO NOT create a key called name the key is already on the object.
userObj.greeting = function(){
  return ('Hi, my name is ' + this.name);
}
// I realized after looking at the solution, I could have just wrote: return `Hi, my name is ${this.name}`
  // Please write all of your code on the lines above.
  return userObj;
}