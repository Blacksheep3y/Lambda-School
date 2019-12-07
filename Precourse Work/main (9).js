// NOTE: Do NOT create a new array in any of the following exercises!

function exerciseOne(classmates){
// Exercise One: You will be given an array called 'classmates'
// Create a variable called 'howManyStudents', and assign it to 
// the length of the classmates array (using the length property)
var howManyStudents = classmates.length;
// Please write your answer on the line above.
  return howManyStudents;  
}

function exerciseTwo(snacks){
// Exercise Two: you will be given an array called 'snacks'
// Using an array method, add your favorite snack to the end of the array
snacks.push('oatmeal creampies');
// Please write your answer on the line above.
  return snacks;
}

function exerciseThree(tasks){
// Exercise Three: You will be given an array called 'tasks'
// Using an array method, remove the task from the end of the array
let removedTask = tasks.pop();
console.log(removedTask);
// Please write your answer on the line above.
  return tasks;
}

function exerciseFour(numbers){
// Exercise Four:  You will be given an array called 'numbers'
// Using an array method, add a number (any number) to the beginning of the array
numbers.unshift(7);
// Please write your answer on the line above.
  return numbers;
}

function exerciseFive(nextInLine){
// Exercise Five: you will be given an array called 'nextInLine'
// Using an array method, remove the first person from the array.
let removedInLine = nextInLine.shift();
console.log(removedInLine);
// Please write your answer on the line above. 
  return nextInLine;
}