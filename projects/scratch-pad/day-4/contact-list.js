// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {     //FACTORY FUNCTION

    //create variable obj that is an object literal {}
    var obj = {};

    //using dot notation, create new keys in the object literal {}, and assign them the parameters of the makeContact function
    obj.id = id;
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;

    //return the var obj
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
    
        //create addContact function that takes a new contact and adds it to the contacts array
        addContact: function(contact) {
            //use push method to push new contact into contacts array
            contacts.push(contact);
        },

        //create function findContact that takes a fullName as a string and returns the object if found in the contacts list
        findContact: function(fullName) {
            //use for loop to iterate through the objects of the array
            for (var i = 0; i < contacts.length; i++) {
                //use conditional statement to check if nameFirst + nameLast in each object in contacts array equals fullName
                //use dot notation to specify the values at the nameFirst and nameLast keys in each object
                if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    return contacts[i];
                }
            }
        },

        //create function removeContact that removes a contact from the contacts array
        removeContact: function(contactToRemove) {
            //use splice method to remove contact from contacts array
            contacts.splice(contactToRemove, 1);
        },
 //create function printAllContactNames that returns a String formated with all the full-names of the separated with a line-break
 printAllContactNames: function() {
    var fullNames = '';
    var finalName = '';
    for (var i = 0; i < contacts.length; i++) {
        if (i < contacts.length - 1){
            fullNames = fullNames + contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
        }else if (i = contacts.length - 1){
            finalName = finalName + contacts[i].nameFirst + ' ' + contacts[i].nameLast;
        
        }
    }
return fullNames + finalName;
    //I need to access the nameFirst and nameLast in the contacts array and combine them into full name strings
    //Once I have full name strings, I need to concatenate the strings into one string, with each  name on a separate line
}  
       
}
}
        
    // YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
