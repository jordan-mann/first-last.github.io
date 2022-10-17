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
 
   let oldestPerson = _.reduce(array, function(oldest, current, index, array) {
            
        if(oldest.age > current.age) {
            return oldest;
        }
        return current;
});
           return oldestPerson.name; //return oldestPerson;
};


    

var youngestCustomer = function(array) {

    let youngestPerson = _.reduce(array, function(youngest, current, index, array) {
        
        if (youngest.age < current.age) {
            return youngest;
        }
        return current;
    });
    return youngestPerson.name;
};



var averageBalance = function(array) {
    
    //use reduce to create a sum of all the balance values
    let sum = _.reduce(customers, function(total, current, index, array) {
       //return the seed (total) + current balance value, with special characters removed, and turned into a number using Number()
        return  total + Number(current.balance.replace(/[$,]/g, ''));
        
    }, 0);
    //return the average by dividing sum by number of customers
    return sum / customers.length;
};





var firstLetterCount = function(array, letter) {
  
    let letterCount = _.filter(array, function(current, index, array) {
 
     
 
         return current.name.toLowerCase().charAt(0) === letter.toLowerCase();
    })
   
    return letterCount.length;
 };




var friendFirstLetterCount = function(array, customer, letter) {
   

  for (let i = 0; i < array.length; i++) {
    if (array[i].name === customer) {
      let friendsWithLetter = _.filter(array[i].friends, function(current, index, array) {
        return current.name.charAt(0).toLowerCase() ===  letter.toLowerCase()
      });
      return friendsWithLetter.length;
    }
    
  }
}  


/*
I: Array of customers and a customer name
O: Array of other customers' names who have the input customer's name in their friends list
C:
E:

*/

var friendsCount = function(array, name) {

  var friends = [];
     
  //Olga Newton is a customer. She is also a friend in the friends lists of Doyle Erickson and Doris Smith. 
  //We want to return an array with the names of Doyle Erickson and Doris Smith
  //var customerNames = [];
      for (let i = 0; i < array.length; i ++) {
        for (let j = 0; j < array[i].friends.length; j++) {
          if (array[i].friends[j].name === name) {
            friends.push(array[i].name);
          }
        }
       
      
      }
  return friends;
     
   }
   

var topThreeTags = function(array) {

var tagsArray = _.filter(array, function(current, index, array) {

    return current.tags;

});
    return tagsArray;

};




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
