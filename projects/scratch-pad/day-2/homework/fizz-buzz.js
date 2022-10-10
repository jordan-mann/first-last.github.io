// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//create a for loop that can access every number from 1 to 100
for (var i = 1; i <= 100; i++) {

    //The for loop will iterate through an if else if statement to print different values to the console
    //use if statement and remainder 3, as well as && operator and remainder 5 to determine if number is divisible by 3 and 5
if (i % 3 === 0 && i % 5 === 0) {
    //console log message
    console.log('FizzBuzz');

    //use if statement and remainder 3 to determine if number is divisible by 3 only
}else if (i % 3 === 0) {
    //console log message
    console.log('Fizz');

    //use statement and remainder 5 to determine if number is divisible by 5 only.
}else if (i % 5 === 0) {
    //console log message
    console.log('Buzz');

}else {
    //console log message
    console.log(i);
}
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}