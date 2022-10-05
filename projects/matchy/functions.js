/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//Implement a function declaration called search that takes a parameter 
//representing the animals array and takes a parameter represnting a string, 
//the name of an animal on which to performa a search
//Function should look through the animals array and retrun the animal's object
//if an animal with that name exists

function search(array, string) {
    //use for loop to look through array
    for (var i = 0; i < array.length; i++) {
        //use conditional statement to check if name represented by string 
        //exists in an animal's object
        if (string === array[i].name) {
            //return the object with the name
            return array[i];
         };      
        }
        //otherwise return null
        return null;
    };



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Write a function that takes 3 parameters: an array for animals array, 
//a string for an animal's name, an object representing an animal object
function replace(array, string, object) {
//use a for loop to loop through the animals array
    for (var i = 0; i < array.length; i++) {
        //use an if statement to determine if an object contains the input name
        if (string === array[i].name)

        //take the animal object and assing it to a different object represented
        //by the object passed in as an argument
        //return the new object
        return array[i] = object;
    }
   
};


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//write a function called remove that takes 2 parameters: an array of animals
//and a name of an animal
function remove(array, name) {
    //create for loop to loop through the array
    for (var i = 0; i < array.length; i++) {
        //use an if statement to see if the name passed in as an argument exists
        //within the animals array
        if (name === array[i].name) {
        //if the name exists in the array, remove the object
        array.splice(i, 1)
        return array;
        }
    }
};


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//write a function called add with two parameters: and array of animals, 
//and an object representing a new animal
function add(array, object) {

    for (var i = 0; i < array.length; i++)
    //use if statement to check if the animal object has a name property with a
    //length > 0
    if (object.name.length > 0 && object.species.length > 0 && object.name !== array[i].name) {
        array.push(object);
        return object;
        }else {
            return null;
        }
    
};


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
