// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //return a function that test whether a value is greater than the base parameter
    return function(value){
        return value > base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //return a function that tests whether a value is less than the base parameter.
    return function(value){
        return value < base;
    } 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

    //create variable to make startsWith lower case
    var startsWith1 = startsWith.toLowerCase();

    //returns a function that tests if a give string starts with the startsWith character
    return function(string){ 

        //create variable to make string lower case
        var string1 = string.toLowerCase();

        //return true if the string starts with the startsWith character
        return string1[0] === startsWith1;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //create variable to make endsWith lower case
    var endsWith1 = endsWith.toLowerCase();
    
    //returns a function that test if a give string ends with the endsWith character
    return function (string){

    //create variable to make string lower case
    var stringOne = string.toLowerCase();

    //return true if the string ends with the endsWith character
    return stringOne[string.length-1] === endsWith1;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) { //modify is the function that will'modify' a single string
    // YOUR CODE BELOW HERE //
    
    // create a variable array to collect modified string
    var output = [];

    //create for loop to iterate through the strings in the given array
    for (var i = 0; i < strings.length; i++){


        //use push method to push modified strings into output array
        output.push(modify(strings[i]));
    
    }
    
    return output;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {  //test is a function that will 'test' a single string
    // YOUR CODE BELOW HERE //
    
    //use for loop to loop through strings 
    for (var i = 0; i < strings.length; i++) {

        //use conditional statement to test if each string is true
        //run each string through the function
        if (test(strings[i]) === false){
            return false;
        }
    }
   return true;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
