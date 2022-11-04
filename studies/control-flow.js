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
 * else
 * else-if
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



// 2. Else Statements
// Else statements are very similar to if statements. However, rather than the line of code being complete if the condition is found to be false,
// another line of code is run intead. So in this case, if the first statement (an "if") is true, the code will continue on that path. If it is false,
// the, the next statement (an "else") will be executed.

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
}if (y > x) {
    console.log("y is pretty big")
}if (x < z) {
    console.log("x is pretty big")
} else {
    console.log("no big numbers here")
}
// In this example, we expect "no big numbers here" to print to the console, because none of the if statements before it were true.



// Else-if Statements