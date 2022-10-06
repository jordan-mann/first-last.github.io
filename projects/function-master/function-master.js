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
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            return i + ' ';
        }
    }
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

    //use if statement to check if noises array contains any values
    if (object.noises.length > 0) {
        //if the noises array contains a value, return message
        return object.noises.join(' ');
        //use else if statement in case the noises array has no values
    } else if (object.noises.length === 0) {
        //if the noises array has no values, return  message
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string, word) {

    var array = string.split(' ');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return true;
        }
    }
    return false;
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

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

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