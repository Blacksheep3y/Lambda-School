function ClassOne(name, pw, mail){
  // Exercise One: In this exercise you will be creating your own class!
  // You are currently in the class, you are given three strings, name, pw, and mail.
  // You need to create three properties on this class.
  // Those properties are: 'username', 'password', and 'email'
  // Set the value of username to name,
  // Set the value of password to pw,
  // Set the value of email to mail
  this.username = name;
  this.password = pw;
  this.email = mail
  // Note: Remember you DO NOT need to return anything in a class!
}

function ClassTwo(name, pw, mail){
  // Exercise Two: Now that you have created your own class, 
  // you will create a class with a method on it.
  // In this class create 4 properties: username, password, email, and checkPassword.
  // Set the value of username to name,
  // Set the value of password to pw,
  // Set the value of email to mail
  // Set the value of checkPassword to a function. 
  // The checkPassword function takes a string as it's only argument.
  // Using the 'this' keyword check to see if the password on the class is the same as 
  // the string being passed in as the parameter. Return true or false.
  this.username = name;
  this.password = pw;
  this.email = mail;
  this.checkPassword = function(newPassword) {
    return this.password === newPassword;
  }
}