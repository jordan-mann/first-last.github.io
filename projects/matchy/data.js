/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a vaiable name animal and assign it to an empty object
var animal = {};

//using dot notation give animal a property names species with the value
//of an animal species
animal.species = 'dog';

//using bracket notation give animal a property called name with a value
//of your animal's name
animal['name'] = 'Bartholemew';

//using either notation, give animal a property called noises with value of
//empty array
animal.noises = [];

//print you animal object to the console

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a varialbe named noises and assign it to an empty array
var noises = [];

//using bracket notation give noises it's first element. A string representing a 
//sound your animal might make
noises[0] = 'barking';

//use push to add a sound
noises.push('sniffing');

//use unshift to add a sound
noises.unshift('whining');

//use brackets to add sound to last index
noises[noises.length] = 'yip';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//use bracket syntax to assign noises property on animal to our noises array
animal['noises'] = noises;

//use any syntax to add another noise to the noises property
noises.splice(2, 0, 'panting');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Properties on objects can be accesses through bracket or dot notations.
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *Elements of an array can be access with bracket notation. Elements can be 
 *via brackt notation, or through array functions that add elements.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a variable named animals and assign it to an empty array
var animals = [];

animals.push(animal);

console.log(animals);

//create a variable called duck and assign it to the given data
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

//push duck to animals
animals.push(duck);

console.log(animals);

//create 2 more animal objects with the same key values pairs and push them to animals
var cat = {
species: 'duck',
name: 'Cornelius',
noises: ['meowing', 'purring', 'hissing']
};

animals.push(cat);
 
var whale = {
species: 'whale',
name: 'Frederick',
noises: ['blowing', 'splashing', 'generally mournful whale sounds']
};

animals.push(whale);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//use an array to create a list of friends
//arrays are particularly useful at creating collections of data
//create a variable called friends and assign it to an empty array

var friends = [];

//write a function called getRandom that takes our animals array and returns
//a random index of the input array, using Math.random

var randomAnimal

function getRandom(animals) {

return Math.floor(Math.random() * animals.length);
};
  console.log(getRandom(animals));

  //add the name of the animal at the random index to the friends array

var randomAnimal = animals[getRandom(animals)];

friends.push(randomAnimal.name);

console.log(friends);

//add the the key value of friends and the random animal to the animals array

animals[1]['friends'] = friends;



console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}

