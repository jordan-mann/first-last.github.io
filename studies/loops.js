/**
 * LOOPS:
 * 
 * Loops are are useful expressions of code. They allow programmers the ability of creating code that can repeat any needed number
 * of times, rather than have to write out an unwieldly number of lines of code.
 * 
 * It is also very useful when programmers do not know the specifice number of items they are dealing with, as loops can adapt to 
 * the inputs they are given.
 * 
 * 
 * Loops are the coding expressions used to access values in complex data types, like arrays an object.
 * 
 * There are three kinds of loops:
 * 
 * While loops
 * For loops
 * For-in loops
 * 
 */

// 1. While Loops
// While loops are often used to create a counting sequence.
// The basic logic of a while loop is that, while a specific statement is true, an action will be performed.

let n = 5;
while (n < 10) {
    console.log(n);
    n++
}

// In the above example, expect the console to print 5 6 7 8 9.
// n starts at 5. When the code reads that n is less than 10, the action it performs is printing the value of n to the console.
// After this action, the loop must increment or decrement to continue the loop cycle. In this case, it increments. Now the value of n is 6.
// Since 6 is less tha 10, the code will print the new value of n, 6, to the console. It will increment again and continue the pattern.
// The pattern will continue until the value of n is no longer less than 10. Once that comparison comes up as false, the code will end.

// While loops can also count in reverse.

let n = 5;
while (n > 0) {
    console.log(n);
    n--;
}

// In this example, expect 5 4 3 2 1 to print to the console. The code works the same as the first example, except that it counts backwards,
// and it does this because it decrements down toward the target number.

// It is important to pay attention to how one decrements or increments in while loop. It is possible to create an infinite loop that will
// crash a program if done incorrectly.


let n = 5;
while (n > 0) {
    console.log(n);
    n++;
}

// Expect the program to crash due to an infite loop. Because the starting value is 5, which is greater than 0, and the code increments by one
// after each iteration, the code will always be greater than 0, incrementing to infinity.
// The increment or decrement in a while loop must work in tandem with the target number in the while loop, so as to avoid infinite loops.




// 2. For Loops
// For loops are similar to while loops in that they can be used to create a counting sequence. However, for loops are also supremely useful in 
// iterating through the values of an array.
// The basic logic of a for loop, is that while the input value is less than or greater than the target value, the code will execute, and increment or
// decrement the input value.

let array  = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {

    console.log(array[i]);
}

// In this example, expect the console to show 1 2 3 4 5. Because arrays are indexed data types with indexes starting at 0, it will print each value of the 
// array, starting with the value at the 0 index, and continuing until the index is no longer less than the length of the array. Since the array has 5 items,
// it's length is 5, so when the the value i is incremented to 4, it will print the value at the 4 index, which is 5. 
// After this, when the value i increments to 5, it will determine if the 5 is less than the length of the array. Since 5 is not less than 5, it will find this false,
// and end the code there.

// For loops can also be used to iterate in reverse

let array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {

    console.log(array[i]);
}

// This code example is very similar to the previous one, but prints the values to the console in reverse order.
// Rather than start the input value of i at 0, it starts at the value of the number of indexes in the array. Array.length - 1, is equivalent to the total number
// of indexes, since the number of indexes is always one less than length, since length starts counting at 1, while indexes start counting at 0.
// The target number is 0, and the input value of i decrements down toward the target. When the boolean expression i >= 0 is no longer true, the code will end. 

// For loops can also be used to manipulate strings, since strings, like arrays, are indexed values.

let name = 'awesome';

let newName = '';

for (let i = 0; i < name.length; i ++) {

    newName += name[i].toUpperCase();
}
console.log(newName);

// In the above example, the for loop iterates through each character of the input string 'awesome', and forces the character to upper case. 
// It then adds each upper cased character into a new string called newString
// In dealing with strings, the for loop behaves the same way it does with arrays.



// 3. For-In Loops
// For-in loops are used to iterate through objects. Since objects are not indexed the way arrays are, for-in loops operate differently and iterate through the object
// data type differently than a for loop iterates through an array.
// For-in loops iterate through objects to access object keys or values.
// The basic logic of a for-in loop is that, as long as the object has more keys, the loop will continue to iterate through the object.

let person = {
    name: 'Jordan',
    class: 'Bootcamp', 
    age: 31
}

for (let key in person) {
    console.log(key);
}

// In this example, expect the keys of the object to print to the console: name class age.

// If we were looking to see the values for each key/value pair, rather than just the keys...

let person = {
    name: 'Jordan',
    class: 'Bootcamp', 
    age: 31
}

for (let key in person) {
    console.log(person[key]);
}

// In this example, expect the values of the object to print to the console: 'Jordan', 'Bootcamp', 31.