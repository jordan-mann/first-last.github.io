/**
 * STRING MANIPULATION:
 * 
 * 0: Strings are immutable primitive values. As such, once a string is assigned to a variable, it cannot be changed. Any manipulations of a string result in a new string.
 * 
 * There are two ways in which strings can be manipulated: with operators and with string methods.
 * 
 * The operators used on strings are the concat operator (+), and the concatenate assignement operator (+=).
 * 
 * Several string methods are as follows:
 * 
 * .slice()
 * .charAt()
 * .toUpperCase()
 * .toLowerCase()
 * .replace()
 * 
 */


// 1. String manipulation through operators
// The string operators create new strings by concatenating other strings together.

//The concat operator can take two or more strings and put them together into a single string.

var nameFirst = 'Jordan';

var nameLast = 'Mann';

var fullName = nameFirst + nameLast;

console.log(fullName); //expect 'JordanMann'. The two strings have been combined into one.

//In order to put space inbetween the words in the new string, the concat operator can be used to add in a third string into the assined value of fullName.

var fullName = nameFirst + ' ' + nameLast;

console.log(fullName); //expext 'Jordan Mann'. There is now a space because of the concatenated space added into the value of fullName.


//The concatenate assignement operator is similar to the concat operator. However, rather than just add two strings together to make  new string, the concatenate assignement operator
//allows you to append a string onto another string and change the value of the variable to which the first string was assigned.

var fullName = 'Jordan';

fullName += ' Mann';

console.log(fullName); //expect 'Jordan Mann'. Rather than create a new varialbe to assign the concatenated strings, I'm reassigning the value of the original string to itself plus a new string.

