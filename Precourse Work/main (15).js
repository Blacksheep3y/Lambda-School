function exerciseOne(names){
// Exercise One: In this exercise you will be given and array called names.
// Using the forEach method and a callback as it's only argument, console log 
// each of the names.
names.forEach(function (cb) {
  console.log(cb);
})
}

function exerciseTwo(cents){
// Exercise Two: In this exercise you will be given an array called 'cents'
// This array is a list of prices, but everything is in cents instead of dollars.
// Using the map method, divide every value by 100 and save it as a new array 'dollars'
function centsToDollars(num){
  return num / 100; 
}
const dollars = cents.map(centsToDollars)

//This exercise took a while for me to figure out, since I was used to seeing it work flawlessly outside of a function. So basically just had to readjust to that.
//Also I wanted to include the solution you came up with here so I have it as reference. 
      //  const dollars = cents.map(function(price){
      //    return price/100;
      //  })

// Please write your answer in the lines above.
  return dollars;
}