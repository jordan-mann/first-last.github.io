/**
 * DATA TYPES:
 * 
 * The data used in Javascript fall into different kinds, or type, of values. Each type of value is given a different name to represent what kind of value it is.
 * 
 * In Javascript, data types fall into three categories: primitive values, complex values, and special values.
 * 
 * Primitive data types  define immutable values. Further, they have not "methods" or "properties". They are simple, and are used to build more complex and 
 * sophisticated data types.
 * 
 * Complex data types are collections of data or more sophisticate structures that perform actions. They usually are collections of primitive data types, 
 * although this can be layered, and they can collect other collections, which in turn, eventually hold primitive data types.
 * 
 * 
 * Below are a list of data types:
 * 
 * 
 * Primitive data types:
 * 
 * String
 * Number
 * Boolean
 * Null
 * NaN
 * Undefined
 * 
 * 
 * Object data types:
 * 
 * Array
 * Object
 * Function
 * 
 * 
 * Special data types:
 * 
 * Infinity
 * -Infinity
 */


// 1. String
// A String is a primitive data type. Strings are used to represent textual data. Each element of a string is at an index, with the first element being index 0.
// Strings are immutable, meaning that once the string has been made, it cannot be changed. 
// Strings are always represented in quotation marks, either single (''), or double ("").

var name = 'Jordan Mann'
// In this example, 'Jordan Mann' is a string, assinged to a variable called name.

console.log(name); //expect Jordan Mann to print to the console.




// 2. Number
// A Number is a primitive data type. Numbers are used to represent numerical data, both positive and negative, as well as decimal numbers. 
// Numbers are represented by simple digits, withough quotation marks. Quotation marks would make the value a string datat type, rather than a number data type.

var age = 31;
// In this example, 31 is a number, assigned toa varialbe called name.

console.log(age); //expect 31 to print to the console.




// 3. Boolean
// A Boolean is a primitive data type. Booleans are used to represent truthiness or falsiness. 
// Booleans are represented by the words true and false. Not quotation marks are used as they would cease to be booleans, and would be strings
// Booleans are often the result of more complex code 

var age = 31;

console.log(age === 21); //expect false. When age (31) is compared using logical operators, the result will be true if true, false if false.




// 4. null
// null is a data type of itself, null. It stands for the the intential absence of any object or value.

var myAge = 31;

function discount(age) {
if (age >= 55) {
    return 'Senior discounts';
} else {
    return null;
}
}

console.log(discount(myAge)); // expect null to print to the console, because myAge is less than 55.




// 5. NaN
// NaN stands for Not-A-Number.
// NaN is a data type that usually occurs when the result of an arithmetic operation cannot be expressed as a number.
// NaN is a falsy value in Javascript, meaning that in boolean expressions, it results in false.
// The method Number.NaN can be used to determine if a number is a valid number in a given situation.

var myAge = 31;

if (myAge > 2 || myAge < 12) {
    myAge = Number.NaN;

    console.log('No kid discounts for you');
} else {
    console.log('Kids eat for free');
}

// Expect the console to print 'No kid discounts for you', because myAge is not a valid number in the given number range.




// 6. undefined
// undefined is a primitive type of value that is given as the default value to a variable that has not been otherwise defined.
// undefined is also used in function and is the result when a function does not have a return value
// undefined is a varialbe in the global scope

function compare(a, b) {
    if (a < b) {
      console.log('a is bigger');
    }
    }
    
    console.log(compare(5, 2)); // expect undefined, because the function does not include a return value.




// 7. Array
// An array is a collection of individual data pieces, separated by commas. Data pieces in an array can be simple data types 
// like strings and numbers, or complex data types like other arrays, or objects.
// Arrays are formed between brackets '[]'.
// Arrays can be manipulated in different ways to add, remove, or alter the data they contain.
// Each item in an array is indexed, with the first element starting at 0.

var thingsOnMyDesk = ['computer', 'coffee', 'monitor', 'phone']; // this array is collection of strings

thingsOnMyDesk.push('lamp'); //The .push method is one of the ways an array can be manipulated to add more data to it. 
// thingsOnMyDesk now looks like this: ['computer', 'coffee', 'monitor', 'phone', 'lamp'];

var contactList = [{name: 'Bill', age: 40}, {name: 'Zach', age: 30}, {name: 'Bob', age: 35}]; //This is an example of an array holding a list of complex data types, 
// specifically a list of objects.




// 8. Object
// An object is a complex data type that collects individual data pieces, but orders them into labeled values. Each value in an object is referred to by a key. Together,
// they are called key/value pairs.
// Object values can be simple, or they can contain arrays or other objects
// In order to access an object's values, dot notation or bracket notation are needed.
// Objects can be modified to remove, add, or change it's existing data.
// Objects are formed between curly braces '{}'.

var me = {name: 'Jordan', age: 31}; //This is an example of an object, with two key/value pairs. They keys are name and age. The values are 'Jordan', and 31.

me.friends = ['Joe', 'Lauren', 'Zach']; // This code uses dot notation to access the me object and add a new key/value paire to it. The new key is freinds, and 
// the value is an array holding the string values of 3 names.

console.log(me); // excpect {name: 'Jordan', age: 31, friends: ['Joe', 'Lauren', 'Zach']}




// 9. Function
// A function is a data type that takes in values, performs and action or actions on the values, and returns an output
// Input data ===> function performs it's actions ===> output data.
// Functions general take arguments, which are the values pass in, an usually includes a return statement. Neither arguments or return are required though.
// Functions generally follow the following format:
//       function functionName(input) {
//              function internal code where the magic happens
//                  return output
//              }
//
// Functions can either be created through a function declaration by writing in the format "function functionName() {}", or they can be create by a function expression
// byt assignng the function to a variable in the format var thisFunction = functionName() {};
//
// The difference in these two methods lie in how hoisting acts on them.
//
// In defining a function, parameters are used in place of arguments, if the function takes arguments. Parameters are place holders for futuer arguments.
// To utilzed a function, the function must be called. To call a function, writed the function with any arguments it takes.

function add(a,b) {
    return a + b;
}
// This is a function created via a function declaration. It will take two arguments, currently represended by the parameters a and b.
// The action the function performs is to add the passed in arguments together and return the result.

console.log(add(5, 7));
// This is a function call that calls the above function add(). The arguments passed in in place of the parameters are 5 and 7. This function call is wrapped inside of
// a console.log object, meaning it will first call the function to perform it's action, and then print the result to the console.
// Expect the result printed to the console to be 12, since the function added 5 and 7 together.

function fizzBuzz() { // function declare and called fizzBuzz(). This function does not take any paramters, meaning it will not take arguments. It is a function
                      // that contains a block of code that performs a specified action

    for (var i = 1; i <= 15; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
      }else if (i % 3 === 0) {
        console.log('fizz');
      }else if (i % 5 === 0) {
        console.log('buzz');
      }else {
        console.log(i);
      }
    }
  }
  console.log(fuzzBuzz()); //Expect: 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fuzzbuzz  undefined.

  // The last console log include a function call that has fizzBuzz() begin its action. The for loop contains the range of numbers the function is working with.
  // Each conditional statement sets out what the output should be for each number in the range, and prints it to the console when the function was invoked.
  // undefined is printed to the console at the end because this function has no return value.




  // 10. Infinity and -Infinity
  // Infiniy and -Infinity are special number data types that represent inginity, numbers that are bigger or smaller than any other number.
  // Positive integers greater than the max number value possible are converted to +Infinity
  // Negative integers smaller than the minimum number value possible are converted to -Infinity

  // The limit of a Javascript numbers is 1.797693134862315E+308. Anything larger than this is Infinity
  // The limit of negative Javascript number is -1.797693134862315E+308. Anything smaller than this is -Infinity.

var x = 1.797693134862315E+308;

var y = 1.797693134862315E+308 * 1.1;

console.lot(y); // expect Infinity, because 1.797693134862315E+308 * 1.1 is greater than 1.797693134862315E+308, and is therefore given the value of Ininity.
