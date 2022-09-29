// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //create an array variable to collect outputs
    var outputs = [];

    //use if conditional to create rule if start is less than end
    if (start < end) {

    //use for loop to loop through start to end
    for (var i = start; i <= end; i++) {

        //use push method to push numbers to outputs array
         outputs.push(i);
    }
    
    }
     
    //use if conditional to create rule if start is greater than end
    if (start > end) {

        // for loop to loop through start to end
        for ( var i = start; i >= end; i--){
             outputs.push(i);
        }

        
    }
    //return outputs from either conditional statement
    return outputs;
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
