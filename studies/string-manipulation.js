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


//2. String manipulation through methods.
// In Javascript, strings are treated like objects when it comes to certain methods. Characters in strings are indexed, like items in an array, and so can be accessed like items in an array.
// Accessing characters in a string allows us to manipulate them to make new strings.

// Five very common string methods are as follows.
/*
.slice()
.charAt()
.toUpperCase()
.toLowerCase()
.replace()
*/


// .slice()
// the .slice() method allows us to slice out a portion of a string to make a new string.

var name = 'Jordan Mann';

var slicedName = name.slice(0, 6);

console.log(slicedName); //expect 'Jordan'. The variable slicedName takes the variable name with the characters from the 0 index up to, but not including, the 6th index, and slices that 
                         // portion out and returns the characters between those indices as a new string.

// The slice method can take one or two index values. The first is the index where the slice should start. The last is the value where the slice ends, but it does not include this value.
// If the slice method is used with only one input index value, the slice begins at that index and includes the rest of the string.
// If negative index values are used in the slice method, the indices are counted from the end.

var name = 'Jordan Mann';

var slicedName = name.slice(-10, -5); //expect 'Jordan Mann'



// .charAt()
// the .charAt() method allows us to access a character at a paricular index of the string.

var name = 'Jordan Mann';

console.log(name.charAt(7)); // expect 'M'. This is console logging the 7th index.


// .toUpperCase()
// the .toUpperCase() method will force the characters of a string to upper case.

var name = 'Jordan Mann';

console.log(name.toUpperCase()); //expect 'JORDAN MANN'. Every character has been forced to upper case.



// .toLowerCase();
// the .toLowerCAse() is the opposite of .toUpperCase(). It forces the characters of a string to lower case.

var name = 'Jordan Mann';

console.log(name.toLowerCase()); //expect 'jordan mann'. Every character has been forced to lower case.


// Some methods can be used together. 

var firstName = 'jordan';

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

console.log(firstName); // Expect 'Jordan'. We used the charAt() method to acess 'j', and .toUpperCase() to turn it into 'J'. We then used the concate operator
                        // and .slice to add the portion of the string from the 1 index to the end, back to the capitalized 'J'.




// .replace()
// the .replace() method allows us to acces a portion of a string, and create a new string replacing the accessed portion.

var name = 'Jordan Mann';

name = name.replace('Mann', 'Awesome');

console.log(name); //expect 'Jordan Awesome'. The first string in put into the replace method is the portion of the original string we are accessing. The second string is what we are 
                   // replacing it with.
