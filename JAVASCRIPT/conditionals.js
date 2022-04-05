`use strict`

// --- CONDITIONALS ---

// --- Truthy and Falsey ---
/*
    Evaluates to false
    -> false
    -> 0
    -> ``
    -> ""
    -> ''
    -> indefined
    -> null
    -> NaN

    Evaluates to true

    EVERYTHING ELSE
*/

//  --- IF (ELSE IF and ELSE) ---
/*
    check a condition, then run a code block if it is met
*/

let a = 2;
if (a == 0) {
    // if statment in () is true then do inside {}
    console.log(`a is currently ${a}`);
} else if (a) {
    // else if statment in next () do inside {}
    console.log(`a is truthy`);
} else {
    // catch all else when all the if's are 
    console.log (`a is falsey`);
}

// --- TERNARY IF ---
/*
    shorthand version of an IF / ELSE statement
*/

// if else
let x = 1;
if(x == 1) {
    console.log(`hello`);
} else {
    console.log(`goodbye`);
}

// ternary
x == 1 && x == 2 ? console.log(`hello`) : console.log(`goodbye`);

// --- EQUALITY and TYPE ---
/*
    type is mutable in JS
    so you can compare different data types!
*/

// JS is mutating the type so that ONE is equal to ONE (checking its inherent value not the type)
1 == `1`? console.log(true) : console.log(false);

// if you want to ALSO evaluate the type
2 === `2` ? console.log(true) : console.log(false);

// the STRICTLY EQUAL OPERATOR `===`
// this checks type and value