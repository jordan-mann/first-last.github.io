////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function that returns the minimum of two input numbers. The function takes two parameters, which are numbers

function min(a, b) {
  //create a conditional statement that compares a to b, and returns a if it less.
if (a < b) {
  return a;

  //create an else if statement in case a was not less than b in the first conditional. In this statement, if b is less than a, return b
}else if (b < a) {
  return b;

  //in the case that both a and b are equal, they are equally minimum, so returning either number will work. We will return a.
}else if (a === b) {
  return a;
}
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function that returns a boolean of true if the number is even, and false if odd. The function will take a single parameter, which is a number.

function isEven(a) {

  //create an if statement. Using the remainder operator, divide a by 2, and if the remainder is 0, the number is even and we will return true.
  if (a % 2 === 0) {
    return true;

    //create an else if statement. Using the remainder operator, divide a by 2, and if the remainder is not 0, the number is not even, and we will return false.
  }else if (a % 2 !== 0) {
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function that counts how many times a specified character occurs in a given string. The function will take the parameters of a string and a character

function countChars(string, char) {

  //create a variable called array, and assign it the string in the split method, separating each character into it's own index
  let array = string.split('');

  //create a variable called newArray. We will need this later to put the character we are counting for into.
  let newArray = [];
  
  //create a for loop that will iterate through the array variable
  for (var i = 0; i < array.length; i++) {

    //inside the for loop, create an if statement that compares the input character to each character from our string that was split into the array
    if( char === array[i]) {

    //in the event that the if statement found char to equal the character at each given index of the array, push the character at that index in the the newArray
      newArray.push(array[i]);
    }
  }
  //to return the number of times char occured in string, we return newArray.length
    return newArray.length;
  

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function that counts how many time the character 'B' occurs in a string. This function will take only one parameter, which is a string

function countBs(string) {

//create a variable called array, and assign it the string in the split method, separating each character into it's own index
let array = string.split('');

//create a variable called newArray. We will need this later to put the character we are counting for into.
let newArray = [];

  //create a for loop that will iterate through the array variable
  for (let i = 0; i < array.length; i ++) {

    //inside the for loop, create an if statement that compares the character 'B' to each character from our string that was split into the array
    if (array[i] === 'B') {

      //in the event that the if statement found 'B' to equal the character at each given index of the array, push the character at that index in the the newArray
      newArray.push(array[i])
    }
  }
   //to return the number of times 'B' occured in string, we return newArray.length
  return newArray.length;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
