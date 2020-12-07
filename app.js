// unlike other programming languages, in JS you can hold a collection of different data types, even functions and objects
// Below, the array holds a number, boolean, object, function, and string.

let array = [1, true, {name: 'Miguel', address: '111 Main Street'}, function(name){let greeting = 'Hello '; console.log(greeting + name)}, "String"];

console.log(array); // output = array above

// what if you wanted to invoke the function inside the array and set it to the name inside of the object, i.e., "Miguel"? Here's one way to do it:

array[3](array[2].name); // output Hello Miguel