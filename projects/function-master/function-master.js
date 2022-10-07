//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//objectValues() : Should take an object and return its values in an array
function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//keysToString() : Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {

var array = Object.keys(object);
return array.join(' ');


}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//valuesToString() : Should take an object and return all its string values in a string each separated with a space 
function valuesToString(object) {


    var array = Object.values(object);
    var array2 = [];
    var string = '';
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            array2.push(array[i]);
      }
    }
    return string += array2.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else if (collection !== null && !(Array.isArray(collection)) && !(collection instanceof Date)) {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {

var string2  = string.charAt(0).toUpperCase() + string.slice(1);

return string2;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
   var array = string.split(' ');

   for (var i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
   }

   var string2 = array.join(' ');
   return string2;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!' 
function welcomeMessage(object) {

for (var key in object) {
    var name = object[key].charAt(0).toUpperCase() + object[key].slice(1);
  
    return 'Welcome' + ' ' + name + '!';
    }
    

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'
function profileInfo(object) {

    for (var key in object) {

        var name = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
        var species = object['species'].charAt(0).toUpperCase() + object['species'].slice(1);
        return name + ' ' + 'is a' + ' ' + species;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'

function maybeNoises(object) {

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

    var array = string.split(' ');
    if (array.includes(word)) {
        return true;
    }else {
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

   if(Array.isArray(object.friends) && object.hasOwnProperty('friends')) {
    for (var i = 0; i < object.friends.length; i++) {
        if (name === object.friends[i]) {
            return true;
        }
    }
   }
   return false;
}
  

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {

// var nameFriends = [];
// var nonFriends = [];

// for (var a = 0; a < object.friends.length; a++){
// for (var i = 0; i < array.length; i++) {
//     if (object.friends[a] === (array[i].name)) {
//         nameFriends.push(array[i].name);

//     }else if (object.friends[a] !== (array[i].name)) {
//         nonFriends.push(array[i].name);
     
//     }
  
// }
// }
// return nonFriends;


// var nameList = [];
// var result = [];
// var current = null;

// for (var i = 0; i < array.length; i++) {
//     if (name === array[i].name) {
//         current = array[i];
//     } else {
//         nameList.push(array[i].name);
//     }
// }
//     if (current === null) {
//         return nameList;
//     }
//     for (var i = 0; i < nameList.length; i++) {
//         if (current.friends.indexOf(nameList[i] === -1)) {
//             result.push(nameList[i]);
//         }
//     }
//     return result;





// //create variable notFriends as an empty array
// let notFriends = [];
// //use for loop to iterate through list of people
// for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < object.friends.length; j++) {

//         //use if statement to test if people are not friends
//     if (array[i] !== object.friends[j]) {
//         notFriends.push(array[i]);
//     }
//     }
// }
// return notFriends;

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
    for (var i = 0; i < array.length; i) {
        if (array[i] === object.hasOwnProperty()) {
            delete 
        }
    }
   
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