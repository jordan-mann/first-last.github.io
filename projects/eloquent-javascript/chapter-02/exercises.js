
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called triangles that takes one number and will print to the console as many times as the input number, each time printing an additional character, #,
//such that the end result is in the shape of a triangle
function triangles(num1) {

//create a varialbe called triangle and assign it to an empty string.
let triangle = '';

//use a while loop to interate through the index values of the string as long as the length is less than the input number
while (triangle.length < num1)

//print to the console the triangle string concatenated to itself with '#'
console.log(triangle += '#');

//If the input number is 7, this process will repeat 7 times, each time adding one more # to the the line of the console that interation prints.

}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function that prints to the console the number 1 - 15. However, if the number is divisible by 3, it prints 'fizz'. If the number is divisible by 5, it prints
// 'buzz'. If the number is divisible by 3 and 5 it prints 'fizzbuzz'
function fizzBuzz() {

  //use for loop to iterate through the number range 1 - 15
  for (var i = 1; i <= 15; i++) {

    //starting with the edge case of numbers divisible by both 3 and 5, create an if statement that uses the remainder operater to test if the current inexed number
    // is divisible by 3 and by 5. Use the logical AND operator to ensure this value is divisible by both 3 AND 5.
    if (i % 3 === 0 && i % 5 === 0) {
      
      //if the value is divisible by both 3 and 5, print message.
      console.log('fizzbuzz');

      //use an else if statement and the remainder operator to test if the number is divisible by 3 only.
    }else if (i % 3 === 0) {
      
      //if the value is divisible by 3, print message.
      console.log('fizz');

      //use an else if statement and the remainder operator to test if the number is divisible by 5 only.
    }else if (i % 5 === 0) {

      //if the value is divisible by 5, print message.
      console.log('buzz');

      //use an else statement to print any number that aren't divisible by 3, 5 or both 3 and 5, to the console.
    }else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function that creates a representation of a nxn square.
function drawChessboard(num1) {

  //create a variable called size and assign it to the input number. This will represent the square area of the chessboard.
  let size = num1;
  //create a variable called board and assign it to an empyt string. This is what will visually create the board.
  let board = '';

  //use a for loop to iterate through the size variable
  for (let i = 0; i < size; i++) {
    //use a nested for loop to iterate through the size variable again
    for (let j = 0; j < size; j++) {
//use an if statement to add the current iterated index of each for loop together. 
//use the remaider operater to test if the value of i+j is even or odd
      if ((i + j) % 2 === 0) {
        //if the value is even, add an space to the board string.
        board += ' ';
        //if the value is odd, add a # symbol to the board string.
      }else {
        board += '#';
      }
  }
  //outside of the iner for loop, use the new line character to add a new line at the end of the each complete iteration of the outer for loop
    board += '\n';
}
//print board to the console.
console.log(board);
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
