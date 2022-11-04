/**
 * CONTROL FLOW:
 * 
 * Control flow refers to the order in which a computer executes code. Unless certain code changes the flow of the code execution,
 * code whill run from the first line to the last line.
 * 
 * One of the primary methods of changing and controlling the flow of code, is through conditional statements. Conditional statements
 * are dicision-making statements. The line of code to be executed will depend on the whether the desired conditions are met.
 * 
 * Conditional statements are:
 * 
 * if
 * else-if
 * else
 * switch
 * 
 */


// 1. If Statments
// The most fundamental conditional stament is the "if statements". If statements are based on booleans. If the statement contained in the 
// if statement is true, the the code will execute. If false, nothing will happen.

var x = 2;
var y = 5;
if (y > x) {
    console.log("y is pretty big") // expect "y is pretty big", because 5 > 2. If the values were reversed and x was great than y, 
}                                  // nothing would print to the console.





// 2. Else-if Statements
// Else statements are very similar to if statements. However, rather than the line of code being complete if the condition is found to be false,
// another line of code is run intead. So in this case, if the first statement (an "if") is true, the code will continue on that path. If it is false,
// the, the next statement (an "else-if") will be executed.

var x = 2; 
var y = 5; 
var z = 7;

if (x > y) {
    console.log("x is bigger")
} else if (y > z) {
    console.log("y is bigger")
} else if (z > x) {
    console.log("z is bigger")
}
// in this examble, we expect "z is bigger" to print to the console, since it is a true statement. The other two statements are a false, so as the computer
// reads those lines of code, is passed over them until is reaches one that is true.





// 3. Else Statements
// Else statements often go together with if and else-if statements. They act as a default code that runs if none of the previouse statements were true.
//  If the first statements ("if" or else-if) is true, the code will continue on that path. If they are false,
// the, the last statement (an "else") will be executed.

var x = 7;
var y = 5;
if (y > x) {
    console.log("y is pretty big")
} else {
    console.log("x is pretty big")
}
// In the example above, we expect "x is pretty big" to print to the console. The line reads the first if statemtent, and, finding it to be false,
// passes over it and automatically follows the "else" statement, printing the given statement to the console.

// An else statement can follow any number of chained if statements.

var x = 7; 
var y = 5; 
var z = 2;

if (z > y) {
    console.log("z is pretty big")
} else if (y > x) {
    console.log("y is pretty big")
} else if (x < z) {
    console.log("x is pretty big")
} else {
    console.log("no big numbers here")
}
// In this example, we expect "no big numbers here" to print to the console, because none of the if statements before it were true.




// 4. Switch Statements
// Switch statements are similar to if and else-if statements. However, rather than testing if a particular expression is true, the expression is tested against
// the values of one or more cases. If one of the cases are true, that code will execute. If none of the cases are true, often a default clause is given, similar 
// to an else statement. This line of code runs if none of the given cases are true.


var color = 'blue';

switch(color) {
    case 'green':
        console.log('The sky is green');
        break;
    case 'red': 
        console.log('The sky is red');
        break;
    case 'blue':
        console.log('The sky is blue');
        break;
    default:
        console.log('The sky is dark');
        break; 
}

// In this example, we expect 'The sky is blue' to print to the console, because as each case is tested against the expression in the switch statement, when it reaches
// case 'blue', it will find that case expression to be true, and will execute that code.
// If the original input variable had been something other than the colors green, red or blue, the switch expression would have been tested against each case expression, 
// and since they all would have been false, the code would then have executed the the default expression, and printed 'The sky is dark'

// The break statements are very important. They separate each case statement. Without the break statements, the code would read through each case statement as though
// it were one statement. 
// In the example below, since there is no break inbetween case 'blue' and case 'red', the computer will see that case 'blue' is true and print that to the console,
// but because there is no break statement, it will consider case 'red' to be part of the same epxression, and will also print the case 'red' message to the console as well.

var color = 'blue';

switch(color) {
    case 'green':
        console.log('The sky is green');
        break;
    case 'blue':
        console.log('The sky is blue');
    case 'red': 
        console.log('The sky is red');    // Expect 'The sky is blue'  'The sky is red' to print to the console.
        break;
    default:
        console.log('The sky is dark');
        break; 
}