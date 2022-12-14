// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//const { map } = require("lodash");

var _ = {}; 


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//function identity takes a value and returns the value unchanged
_.identity = function(value) {
  return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//function typeOf takes any value as an argument
//use typeof method, logical operators, Array.isArray() method and instanceof Date to determine the type of the input value nd return that value as a string
_.typeOf = function(value) {
  if (typeof value === 'string'){
      return 'string';
    } else if (typeof value === 'number') {
      return 'number';
    } else if (typeof value === 'boolean') {
      return 'boolean';
    } else if (typeof value === 'undefined') {
      return 'undefined';
    } else if (Array.isArray(value)) {
      return 'array';
    } else if (typeof value === 'object' && value !== null && !(Array.isArray(value)) && !(value instanceof Date)) {
      return 'object';
    } else if (value === null && value !== 'object' && !(Array.isArray(value)) && !(value instanceof Date)) {
      return 'null';
    } else if (typeof value === 'function') {
      return 'function';
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//create a function that takes an array and a number
_.first = function(array, number) {

  //create a variable called newArray and assign it to an empty array
  let newArray = [];

  //create an if statement to determine if number is negative
if (number < 0) {
  //if the number is negative, return an empty array
  return [];
}
  //create an if statement to determine if the number is greater than the length of the array
if (number > array.length) {
  //if the number is greater than the length of the array, return the array
  return array;
}
  //create an if statement using the Array.isArray() method and bang operator to determine if the array is actually and array, and if not, return an empty array
if (!(Array.isArray(array))) {
  return [];
  //use an else if statement and typeof method to determine if the number is actually a number. Use the not equal to. If it is not a number, return the first value of the array
} else if (typeof number !== 'number') {
  return array[0];
}
//use a for loop to loop through the array and use the number as the range
for (let i = 0; i < number; i++) {
  //push each the iterated values into the newArray
  newArray.push(array[i]);
  
}
//return the newArray
return newArray;
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

//create a function that takes an array and a number
_.last = function(array, number) {

//create a variable called newArray and assign it to an empty array
let newArray = [];

//create an if statement to determine if number is negative
if (number < 0) {
  //if the number is negative, return an empty array
  return [];
}
//create an if statement to determine if the number is greater than the length of the array
if (number > array.length) {
  //if the number is greater than the length of the array, return the array
  return array;
}
//create an if statement using the Array.isArray() method and bang operator to determine if the array is actually and array, and if not, return an empty array
if (!(Array.isArray(array))) {
  return [];
  //use an else if statement and typeof method to determine if the number is actually a number. Use the not equal to operator. If it is not a number, return the last value of the array
} else if (typeof number !== 'number') {
  return array[array.length - 1];
} 
//use the slice method with -number input to remove the number argument from array and give the value of newArray
newArray = array.slice(-number);
//return newArray
return newArray;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {

  //use for loop to iterate through the input array
  for (let i = 0; i < array.length; i++) {

    //use if statement to test if current value === value
    if (array[i] === value) {
      //if true, return that index and end the function
      return i;
    }
    
  }
  //if the value is not in the array, end the function by returning -1
  return -1;

}   
 


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {

  //use .includes with a ternary operator to test if the value is in the array. True if so, false otherwise.
return array.includes(value) ? true : false;
}

/** _.each 
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
//determine if collection is array
if (Array.isArray(collection)) {
  //iterate through collection useing for loop
  for (var i = 0; i < collection.length; i++) {
      //call the input func on each element
      //func(//current element, current index, array)
      func(collection[i], i, collection);
  }
}
  /// else it's an object
  //iterate through collection using for in loop
else {
  for (let key in collection) {
      func(collection[key], key, collection);
}
  
 



}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
  //create variable and assign it to an empty array
let newArray = [];

//use for loop to iterate through input array
for (let i = 0; i < array.length; i++) {

  //use if statement to test if if current value of array is not in the newArray && is not an empty string
if (newArray.indexOf(array[i]) === -1 && array[i] !== '' )
//if it passes both test, push that value into the newArray
  newArray.push(array[i])

}
return newArray;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function(array, func) {
  //create variable and assign it to an empty array
let newArray = [];

//iterate through the input array using for loop and call the input function for each element of the input array. 
//The function should take the arguments of the current element, it's index, and the array
for (let i = 0; i < array.length; i++) {

  //use if statement to test if the function call returns a truthy value, and if so, push the value into newArray
    if (func(array[i], i, array)) newArray.push(array[i]); 
  }
  return newArray;
}





/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
 //create variable and assign it to an empty array
 let newArray = [];

 //iterate through the input array using for loop and call the input function for each element of the input array. 
//The function should take the arguments of the current element, it's index, and the array
for (let i = 0; i < array.length; i++) {

  //use if statement to test if the function call returns a falsy value, and if so, push the value into newArray
  if (!(func(array[i], i, array))) newArray.push(array[i]);
  
  }
  return newArray;
}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {

  //create 3 variables, truthyArray, falsyArray, newArray, and assign each to an empty array
let truthyArray = [];
let falsyArray = [];
let newArray = [];

//use for loop to iterate through input array
for (let i = 0; i < array.length; i++){

  //use an if statement to test the input function's function call on each element of the input array
  //the input function should take the arguments element, key, and array
  //if the function call returns something truty, push that element into truthyArray
  if  (func(array[i], i, array) === true) {
    truthyArray.push(array[i]);

  //use else statement to push all other elements (which are falsy) into the falsy array
  } else {
    falsyArray.push(array[i]);
  }

  }
  //use the push method twice to push both truthyArray and falsyArray into newArray
 newArray.push(truthyArray);
 newArray.push(falsyArray);

  //return newArray
  return newArray;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {

  //create variable and assign it to an empty array
let newArray1 = [];

//if collection is array
if (Array.isArray(collection)) {
  //use for loop to iterate through the collection
for (let i = 0; i < collection.length; i++) {
  //the input function should be called for each element of the array
  //for each function call, push the return into newArray
  newArray1.push(func(collection[i], i, collection)); 
  }
 
} else {
  //use for in loop if the collection is an object
for (let key in collection) {
   //the input function should be called for each value of the object
  //for each function call, push the return into newArray
  newArray1.push(func(collection[key], key, collection));
  }    
}
//return newArray
return newArray1;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
  //the return of pluch should be a function call of the map function
  return _.map(array, function(i){
    //the map function will iterate through the input array of objects and retun the current element's value in a new array if the value's property equals the input property
    return i[property];
  }) 
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(collection, func) {
  //test if input function is not given
if (func === undefined) {
  //test if input collection is an array
  if (Array.isArray(collection)) {
    //loop through collection array
    for (let i = 0; i < collection.length; i++) {
      //if not every element is truthy, return false
      if (!collection[i]) {
        return false;
      }
    }
    //else if collection is an object
  }else {
    //loop through each object key
    for (let key in collection) {
      //if not every element is truty, return false
      if (!collection[key]) {
        return false;
      }
    }
  }
  //else statement, if input function is given. 
}else {
  //If collection is array, input function takes current element of the collection, index and array
  if (Array.isArray(collection)) {
    //loop through array
    for (let i = 0; i < collection.length; i++) {
      //if statement to test if any element is false. If an element is false, return false 
      if (func(collection[i], i, collection) === false) {
        return false;
      }
    }
    //else statement, if collection is object, input function takes current key value, key, and the collection
  }else {
    for (let key in collection) {
      //for in loop to loop through collection object
      //if any of the values are false, return false
      if (func(collection[key], key, collection) ===  false) {
        return false;
      }
    }
  }
}
//if none of the values have returned false before this, they  must all be true. Return true.
return true;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
//test if input function is not given
if (func === undefined) {
   //test if input collection is an array
if(Array.isArray(collection)) {
  //loop through collection array
  for (let i = 0; i < collection.length; i++) {
    //if not every  element is falsy, return true
    if(collection[i]) {
      return true;
    }
  }
  //else if collection is an object
}else {
  //loop through each object key
  for (let key in collection) {
    //if not every element is falsy, return true
    if (collection[key]) {
      return true;
    }
  }
}
//else statement, if input function is given. 
}else {
  //If collection is array, input function takes current element of the collection, index and array
  if (Array.isArray(collection)) {
    //loop through array
  for (let i = 0; i < collection.length; i++) {
    //if statement to test if any element is true. If an element is true, return true
    if (func(collection[i], i, collection) === true) {
      return true;
    }
  }
  //else statement, if collection is object, input function takes current key value, key, and the collection
}else {
   //for in loop to loop through collection object
  for (let key in collection) {
     //if any of the values are true, return true
    if (func(collection[key], key, collection) === true) {
      return true;
    }
  }
}
}
//if none of the values have returned true before this, they  must all be false. Return false.
return false;
}



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {

  //Edge case: what if seed is not give?
  //if no seed is given, use the first element of the collection as the seed. First element (array[0]) = seed. 
  //On the first iteration, use seed as previous result (preResult). see = preResult. seed = first element. preResult = first element (array[0])
  //How do we know if seed is not given? If seed is undefined.

  //Create if statement to test is seed is given.
  if (seed === undefined) {
    //create variable and assign it to the first index of the input array
    let preResult = array[0];
    //use for loop to interate through input array
      for (let i = 1; i < array.length; i++){   //Because on the very first iteration will assign preResult to seed, we start this loop iterating at 1 index

        //use the return value of func as the preResult each time the function is called
        preResult = func(preResult, array[i], i);
      }
      return preResult; 

      //In the if statement above we tested if seed was given, and what to use if seed was not given.
      //If see was not given, we use the first value of the array as the preResult value, rather than seed. 
      //In the case that seed is given, we don't use the first value of the array as preResult. Rather we use seed as preResult.
  }else {
    //if see is given create variable and assign it to the value of input seed
    let preResult = seed;
    //use for loop to iterate through input array
      for (let i = 0; i < array.length; i++) {
        //use the return value of the function call to update preResult
        preResult = func(preResult,array[i], i);
      }
      //return the final updated version of preResult
      return preResult;
  }
}



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, ...moreObjects) {

  //loop through the extended array of input moreObjects to access the individual objects inside
  for (let i = 0; i < moreObjects.length; i++) {
    //use Obejct.assign to add the values of any extra obejcts as the current value of ...moreObjects array, to the input object. If any new objects have different values
    //this will update the original values of the input object to the new values as well.
    Object.assign(object1, moreObjects[i]);
    }
    //return the updated input object.
    return object1;
    
  }





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
}
