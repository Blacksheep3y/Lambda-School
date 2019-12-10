function exerciseOne(UserClass){
  // Exercise One: In this exercise you are given a class called UserClass.
  // You will be adding a method to the prototype called greeting
  // This method will return the string: 'Hello, it is nice to meet you!'
  // DO NOT create a new class or object
  UserClass.prototype.greeting = function(){
    return `Hello, it is nice to meet you!`;
  }
  
  // Please write your code in the lines above
  return UserClass
}

function exerciseTwo(AnimalClass){
  // Exercise Two: In this exercise you are given a class called AnimalClass.
  // The class will already have the properties 'name', 'noise' on it.
  // You will be adding a method to the prototype called 'speak'
  // Using the 'this' keyword, speak should return the following string:
  // '<name> says <noise>'
  // DO NOT create a new class or object
  AnimalClass.prototype.speak = function() {
    return `${this.name} says ${this.noise}`;
  }
  
  // Please write your code in the lines above
  return AnimalClass
}