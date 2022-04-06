`use strict`

// --- SCOPE ---
// in JavaScript

// TWO main types of scope
// LOCAL and GLOBAL

// --- LOCAL SCOPE ---

// Function scope
/*
    variables that are declared inside a function
    are not accessable from outside the function
    if you try to access them you will get a 
    REFERENCE ERROR
*/

let foo = () => {
    let bar = `hello world`;
}

foo();

// --- BLOCK SCOPE ---
/*  variables declared inside a block
    are only accessable from inside the block
*/
{
    let x = 1;
    console.log(x);
}
/*  
    unless you declare your variable using the VAR keyword
    this is one of the reasons we don't use var
*/

// --- GLOBAL SCOPE ---
// Automatically Global
/* 
    if we don't declare a variable but we reference one inside a block
    it is automatically created and added to the global scope
    `use strict` will stop us being able to do this
*/

let globalVar = () => {
    greeting = `hello`;
}

globalVar();

// Standard Global
/*
    declaring a variable outside of a code block
    it can be accessed from anywhere
*/

let a = `a`;

console.log(a);

{
    console.log(`a is = ${a}`);
}

let b = (a) => {
    console.log(`function b gives us ${a}`);
}

b(a)

// HOW JAVASCRIPT LOOKS FOR VARIABLES

// 1. Local (inside the block)
// 2. Global (outside of the block)
// 3. If none exsists crea and add to global scope