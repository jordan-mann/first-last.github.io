// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./first-last.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //implement _.filter() to return array of only male customers
    let males = _.filter(array, function(customer, index, array) {
        //return true if the input customer is male
    
        return customer.gender === 'male';
       
       // return customer.gender === 'male';
        
    });  // => [<male>, <male>, <male>]

   
    return males.length;
};

maleCount(customers);



var femaleCount = function(array) {
    //implement _.reduce() to return number of female customers
    let numFemales = _.reduce(array, function(acc, current, index, array) {
        // acc = 0 | current = {name: 'Stephanie', gender: 'female'}

        //interact with the current customer object to keep track of the number
        // of female customers

        // determine if customer is female
        if (current.gender === 'female') {
            acc += 1; //acc =acc + 1;
        }
            return acc; //returns 1
    }, 0); // => number of female custeomrs

        return numFemales;
};

/**
 * //invoke reduce()
 *  //seed or no seed => result = 0
 * 
 *      //for loop
 *          // 0
 *              //result = func(result (0), {customer}, 0, [...])
 */




var oldestCustomer =  function(array) {
//     //find the oldest customer's name.
 
   return _.reduce(array, function(oldest, current, index, array) {
            
        if((oldest.age || 0) > current.age) {
            return oldest.name;
        }
        return current.name;
});
            //return oldestPerson;
};

// _.filter = function(array, func) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
    
//         if (func(array[i], i, array)) newArray.push(array[i]); 
//       }
//       return newArray;
//     }
    

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
