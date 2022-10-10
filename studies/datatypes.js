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