`use strict`

// --- VARIABLES and DATA TYPES---

/*
in JS data types are DYNAMIC and MUTABLE
-> they are decided at runtime
-> stored in memory as text
*/

/*
we declare variables with
let -> standard variable
const -> constant
var -> the old way we don't use anymore

naming standard is camelCase
people also use $variableName and _myVariable
however camelCase is the standard
*/

let variableOne = `hello`;
const CONSTAN = 4;

// --- DATATYPES ---

/*
in JS there are two 'types' of types
primatives and objects

objects have one datatype -> object
primatives have everything else
-> boolean, number, string, symbol, null, bigint, undefined
*/

let aBoolean = false;
let aNumber = 101;
let aString =`text23121@!`;
let aBigInt = 99999999999999999n;
let aSymbol = Symbol(`description`);
let aNull = null;
let anUndefined;

// --- OBJECTS ---
// they are a collection of properties
// they are mutable
// they are made up of key : value pairs

let myOBject = {
    key : `value`,
    anotherKey : 12345
}

// --- STRING CONCATENATION ---
// joining strings end to end
// quite memory intensive
let string1 = `41 * 12 = `;
let result1 = 41 *12;
console.log(string1 + result1);

// a better way
// --- STRING INTERPOLATION ---
// uses ONE string only
// uses string literals containing placeholders
// sometimes called 'template literals'
let string2 = `42 * 13 = ${42*13}`;
console.log(string2);