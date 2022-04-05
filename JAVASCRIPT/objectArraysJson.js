`use strict`

// --- OBJECTS, ARRAYS and JSON

// -- OBJECTS --
/*
    collection of data in ANY order
    made up of key : value pairs
*/

let animal = new Object();
console.log(typeof(animal));

// Long form fill
animal[`name`] = `Clifford`;
animal[`type`] = `dog`;
animal[`size`] = `big`;

animal.colour = `red`;

// -- Literal Notation --

let vehicle = {
    type : `bike`,
    seats : 1,
    wheels : 2
}

// Data can be stored in an ARRAY
let garage = [
    vehicle,
    {type: `car`, seats: 5 , wheels : 4}
]

// an array
let x = [`a`, `b`, `c`, `d`, `e`];

// lets do some looping through the array
for(let i = 0; i < x.length; i++){
    console.log(x[i]);
}

// ENHANCED for loops
// work with arrays of items
// will always loop through EVERY item
for (let item of x) {
    console.log(item);
}

// Specific Methods to act on ARRAYS

// reverse
console.log(x.reverse());

// change is permanent
console.log(x);

// the join method
console.log(x.join(` `));


// -- JSON --

// JavaScript Object Notation
// Literal notation for JS objects

let newJSON = {
    name : `cameron`,
    age : 29
}

// to convert JSON to different datatypes
// we have to use OVERLOADED methods

// JSON to string
let str = JSON.stringify(newJSON);

console.log(newJSON);
console.log(str);

let person = JSON.parse(`{"name":"ellie","age":43}`);
console.log(person);