//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//objectValues() : Should take an object and return its values in an array
function objectValues(object) {

    //Object.values() to return the values of the object as an array
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//keysToString() : Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {

    //use Object.keys() to put all the keys of the object into an array
var array = Object.keys(object);

    //use .join method to combind the values in the new array in a string separated by spaces.
return array.join(' ');


}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//valuesToString() : Should take an object and return all its string values in a string each separated with a space 
function valuesToString(object) {

    //use Object.values() to put all of the object's values in an array
    var array = Object.values(object);

    //create a variable array2 and assign it to an empty array
    var array2 = [];

    //create a variable string and assign it to an empty string
    var string = '';

    //use a for loop to loop through the values of the array assigned to the object's values
    for (var i = 0; i < array.length; i++) {

        //if if statement to test if value at index is the type of string
        if (typeof array[i] === 'string') {

            //if value type is string, push the string into array2
            array2.push(array[i]);
      }
    }
    //return the empty string varialbe concatenated to itself and the values of array2 turned into a string using join method and separated by space.
    return string += array2.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    //use if statement if test if collection is an array. If array, return 'array'
    if (Array.isArray(collection)) {
        return 'array';
        //use else if statement to test if collection is an obejct. Exclude null, arrays, and dates. If object, return 'object'
    } else if (collection !== null && !(Array.isArray(collection)) && !(collection instanceof Date)) {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
//create variable called string2 and assign it to the first character of string. Use toUpperCase to upper case the character
//use concate operator and slice method to re-add the remainder of the string to the upper cased first character
var string2  = string.charAt(0).toUpperCase() + string.slice(1);

return string2;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
    //create variable array and assigne it to the string using .split method. Separate words with spaces.
   var array = string.split(' ');

   //use for loop to iterate through the new array
   for (var i = 0; i < array.length; i++) {

    //for the word at each index, use charAt method to access the first character, and toUpperCase method to upper case that character
    //use concat operator and slice method to re-add the remainder of each word at each index and the upper cased letter back together.
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
   }
   //create a variable called string2, and assign it to array, but use the .join method to combine the elements of array into a string separated by a space.
   var string2 = array.join(' ');

   //return string2
   return string2;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!' 
function welcomeMessage(object) {

    //use for in loop to access the kesy in the object
for (var key in object) {

    //create variable name. Assign it to the key called name using bracket notation.
    //use charAt and toUpperCase methods to capitalize the first character of the value at the name key.
    //use slice method to re-add the remainder of the name to the upper cased character
    var name = object[key].charAt(0).toUpperCase() + object[key].slice(1);

  //return message
    return 'Welcome' + ' ' + name + '!';
    }
    

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'
function profileInfo(object) {

    //use for in loop to iterate through obejct keys
    for (var key in object) {

        //create variable name and use bracket notation to access the name of the object
        //use charAt and toUpperCase to uppercase the first character of the name
        //use splice to re-add the remainder of the name to the upper cased first character
        var name = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);

        //create variable species and use bracket notation to access the species of the object
        //use charAt and toUpperCase to uppercase the first character of the species
        //use splice to re-add the remainder of the species to the upper cased first character
        var species = object['species'].charAt(0).toUpperCase() + object['species'].slice(1);

        //return message
        return name + ' ' + 'is a' + ' ' + species;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'

function maybeNoises(object) {

    //create varialbe noiseString and assign to an empty string
   var noiseString = '';
    
      //use if statement to check if noises exists as a a property in the object
      //and if so, if the property is an array, and if so, if it contains any values
      if (object.hasOwnProperty('noises') && Array.isArray(object.noises) && object.noises.length > 0) {
          //if the noises array contains a value, return message joined in a string
         noiseString = object.noises.join(' ');
          return noiseString;
      }
      //if there is no array of noises, or the array is empty
      return 'there are no noises'
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string, word) {

    //create variable carlled array and assign to input string and split it into an array with split method and separate with spaces
    var array = string.split(' ');

    //use if statement and includes method to determine if the array includes the input word
    if (array.includes(word)) {
        //if the array includes the input word, return true
        return true;
    }else {
        //iff arry does not include the input word, return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//addFriend() : Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
    //use push method to add name to friends array in object
object.friends.push(name);
//return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) { 

    //use if statement, Array.isArray(), and .hasOwnProperty, and && logical operator to determine if input object is an array && has the property of friends.
   if(Array.isArray(object.friends) && object.hasOwnProperty('friends')) {
    //use for llop to iterate through the object's friends array
    for (var i = 0; i < object.friends.length; i++) {
                //use if statement to determine if the input name equals the name at a given index of the input object's friends array
                if (name === object.friends[i]) {
                    //if they equal, return true
            return true;
        }
    }
   }
   //If they do not equal, or if there is no friends array, or the object does not have a friends key, return false
   return false;
}
  

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
//array is an array of objects

var notFriends = [];
var nameObject = {}; //{name: 'Liza', friends: ['Jimmy']};
var contacts = []; //['Jimmy', 'Bob', 'Sara'];

//Loop through array
  for (var i = 0; i < array.length; i++) {

    //if name is strictly equal to the name at the array index then assign that index
    // (which is an object) to a variable called nameObject
    if (name === array[i].name) {
      nameObject = array[i];

      //if the name is not strictly equal to the name at the array index, 
      //then push the name into the contacts array
  } else if (name !== array[i].name) {
    contacts.push(array[i].name);
      }
    }

    //loop through the newly formed contacts array
  for (var i = 0; i < contacts.length; i++) {

    //use .includes() method to determine if the friends array in the nameObject includes the contact at the current index of the contacts array
    //if false, push contact into array called notFriends
    if (nameObject.friends.includes(contacts[i]) === false) {
      notFriends.push(contacts[i]);
      
    }
  }
  //return notFriends inside the nonFriends function, but outside the for loops and if statements
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {

   //check object to see if key exists in object
        if (object.hasOwnProperty(key)) {
            //if key does exist, update the value to the passed in value, and return the updated object
            object[key] = value;
            return object;
            //if the key does not exist, update the value to include the passed in key/value pair, and return the updated object
     } else {
        object[key] = value;
        return object;
     }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//removeProperties() : Should take an object and an array of strings. Should remove any properties in <object> that are listed in <array> (2, 1, 3)
function removeProperties(object, array) {
    //create for in loop to iterate through object's keys
    for (var key in object) {
        //create nested for loop to iterate through the values of the input array
        for (var i = 0; i < array.length; i++){
            //use if statement to test it each key in the object equals the current index of the input array
         if (key === array[i]) {
            //if the key equals the current index, delete the object property
            delete object[key];
        }
     }
   }
   //return the object
   return object;
}


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//dedup() : Should take an array and return an array with all the duplicates removed
function dedup(array) {
    //create variable called unique and assign it to an array that uses a set
    //method to create new array with duplicates removed
    var unique = [...new Set(array)];
    return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}