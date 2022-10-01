/**
 * VARIABLES:
 * 
 * 0: Variables are named containers for data in javascript. They hold things in memory for the lige-cycle of a program. As named containers, or identifiers,
 * they point to values of different types, such as Number, String, Function, Boolean, Array, Object etc.
 * 
 * Variables have their name because once declared, the value and type of value they indetify can change.
 * 
 * 1: In order to create a variable, we use the keyword var, followed by a name (also known as an id or alias) for the variable.
 * 
 * 2: There are 2 phases to using a variable: the declaration phase, in which a varible is declared and names (for example: var name; var number); 
 * and the initialization or assignment phase, in which the declared variable is given a value (for example, name = Jordan; number = 1)
 *      
 */

// 1. Declaration //
// At the declaration phase, the varialbe myName is unidentified because we have not initialized it to anything

var myName;

console.log(myName); //prints => undefined


// 2. Initialization or Assignment //
// This is when you assign a value to an undeclared varialbe

myName = 'Jordan';
console.log(nyName); //prints => Jordan


// 3. Re-Assignment //
//The value and type of a variable can be reassigned, changing or updating the value of a previously assigned variable

myName = 'Maverick';

console.log(myName); // myName now prints => Maverick

//And one step further:

myName = 12487;

console.log(myName); // myName now prints => 12487


//2. var, let, const

/*
The var statement declares a variable. Any variable must begin by being declared with one of the declaration statements. The most common is var.
The var statement can be function-scoped (it's declaration is limited to use in a particular function), or it can be globally-scoped (it's declaration is is maintained
throughout the program).
*/

var myName; //This is a declared variable. myName has no meaning to the program until it has been declared as a variable.

console.log(myName); // prints => undefined because, while it is a true variable, it has not yet been assigned.

//Disregarding the previous example, if we entered myName, but not declaring it as a variable:

myName;

console.log(myName); // this prints => Reference error; myName is not defined. This is because myName means nothing to the program yet as it hasn't not been defined 
//as anything. 


/*
The let statment also declares a variable. However, unlike var, let is block-scoped, rather than function-scoped or globablly-scoped. Being block scoped means that
that the variable declared with let will not be accessible from outside the particualr block of code it was declared in. A 'block' of code is code that is containted 
in curly braces in a function.
*/

var a = 20;
{
    let x = 30;
    console.log(x); // prints => 30, since this variable declared with let is inside the curly braces of the code block.

    var y = 40;
}
console.log(a); // prints => 20
console.log(y); // prints => 40, even though this command is outside the curly braces, because y was declared with var, rather than let, so it is not limited to the block.
console.log(x); //prints => "Reference error: x is not defined" This happens because we tried to print x outside of the curly braces, and the program only recognizes
//it inside the curly braces.



/*
The const statment declares a varialbe. const stands for constant. The const variable can have either global or block scoped, however, unlike var and let, the value
of a constant can' be changed through reassignement. and it also can't be redeclared. However, in the case that the constant is an array or an object, while the fact
that it is an array or object is constant and can't be changed, the properties or items in the array or objects can be updated or removed.

Because constants can't change, it must be declared and initialized at the same time, unlike other kinds of variables, which can be declared first and initialized later.
*/

//Cannot be:

const myName;

myName = 'Jordan';

console.log(myName); //prints => SyntaxError: Missing initializer in const declaration

//Must be:

const myName = 'Jordan';

console.log(myName); //prints => Jordan


myName = 'Maverick';

console.log(myName); //prints => "TypeError: Assignment to constant variable." Becuase myName was declared as a const variable, I can't change the value of the original statment.


var myName = 'Bob';

console.log(myName); //prints => "TypeError: Assignment to constant variable." This happens because once myName was assigned to a const, we can't make any other kind of variable 
//with the same name. This is true globally, if the constant was initialized as a global variable, or by block, if the variable was initialized as a block-scoped variable.

// 3. Hoisting

/*
Hosting is a mechanism whereby variables are moved to the top of their scope before code execution. This means that regardles of 
where the variables are declared, they are moved to the top of their scope, whether global or local (in a function or a block).

Doing so can result in unexpected errors, and so it not generally recommended.

Javascript only hoists variable declarations, not initializations. This means that initialization will only happend when
the line of code associated with initialization is executed. This is true even if the varalbe was initialized and then declared
originally, or declaired and initialized together on the same line.

Until the execution in the code is reached, the variable is given a default assignment. If the variable has been declared with var, 
the default assignment is "undefined". Variables declare with let prior to any code execution will print unefined. 
Variables declared with let after code being executed, and variables declared with const are not given an default assignement. 
Rather they will recieve a "ReferenceError".
*/

console.log(myName); //prints => 'undefined' because the variable myName has been hoisted and not given an assignement. Therefore
// it uses the default assignment 'undefined'.

var myName; //declaration of the variable.

myName = 'Jordan'; //initialization of the variable

console.log(myName); //prints=> Jordan, because the code executing the initialization of the variable has been reached.


console.log(movie); // prints => ReferenceError becuase the varialbe movie has not yet been initialized. Because when the variable
//belowe uses let, rather than being assigned 'undefined' we recieve a ReferenceError message.

let move = 'Top Gun: Maverick'; // Initializatioin


console.log(city); // prints => ReferenceError becuase the varialbe movie has not yet been initialized. Because when the variable
//belowe uses const, rather than being assigned 'undefined' we recieve a ReferenceError message.

const city = "New Orleans"; //Initialization

//There are various other errors that will come into play if let and const variables are hoisted in differing manners. 

const myName; //variable declared but not initialized.

console.log(myName); //prints => SyntaxError: Unexpected identifier

let myAge; //variable declared but not initialized.

console.log(myAge); //prints => undefined. In this case because the variable was declared prior to any code being executed, 
//it is given a default assignment of undefined.




/*
Because of the potential to have either undefined results to our code, or reference errors, which will need to be resolved before
the proper execution of our code, it is best practice to always declare and initialize our variables before we use them.
*/

