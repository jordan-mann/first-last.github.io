// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use Array.isArray method to test if vlue is an array
    return Array.isArray(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) { //{a:1, b: 2} -> collection of key/value pairs
    // YOUR CODE BELOW HERE //
    
    //determine if teypof value is 'object' AND value is not an array AND value is not null
    //AND value is not an instance of the date object (google how to see if something is instance
    //of date object)

//use if statement to return false if value is null
    if (value === null) {
        return false;
    }

    //use if statement to return false if value is Array
    if (Array.isArray(value)) {
        return false;
    }

    //us if statement to return false if value is Date
    if (value instanceof Date) {
        return false
    }
    
    //use typeof to return true if object takes a collection
    return typeof value === 'object';
      
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if it is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //use if statement to return false if value is null
    if(value === null){
        return false;
    }
    //use if statement to return false if value is Date
    if (value instanceof Date) {
        return false;
    }
    //use typeof to return true if value is an Array or if value is object that takes a collection
    //use || operator
    return (Array.isArray(value) || typeof value === 'object');
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //

    //using if statements, return each typeof value as a string
    if (typeof value === 'string') {
        return 'string';
    }

    //for arrays, use Array.isArray() method
    else if (Array.isArray(value)) {
        return 'array';
    }
    //for objects, we need to exclude arrays, using Array.isArray(), null, and date
    else if (typeof value === 'object'  && !(Array.isArray(value)) && value !== null && !(value instanceof Date)) {
        return 'object';
    }
    else if (typeof value === 'undefined') {
        return 'undefined';
    }
    else if (typeof value === 'number') {
        return 'number';
    }
    else if (typeof value === 'boolean') {
        return 'boolean';
    }
    //for null we need to exlude arrays and dates and previously defined objects
    else if(value === null && value !== 'object' && !(Array.isArray(value)) && !(value instanceof Date)) {
        return 'null';
    }
    else if (typeof value === 'function') {
        return 'function';
    }
    //for dates we need to exclude arrays, null and previously defined objects
    else if (value instanceof Date && value !== 'object' && !(Array.isArray(value)) && value !== null) {
        return 'date';
    }
    
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
