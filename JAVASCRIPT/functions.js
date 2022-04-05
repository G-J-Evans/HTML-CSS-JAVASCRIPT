`use strict`

// --- FUNCTIONS ---
/*
    a block of code that does a thing!
    they are envoked (or run) when 'called'
    DRY principles (don't repeat yourself)
    they can take arguments
    global scope
*/

function hello(message) {
    console.log(message);
}

hello(`greetings`);

// -- RETURNS --
/*
    A thing you output from a function.
    When a function reaches a return it stops
*/

let bye = false;

function goodbye() {
    console.log(`goodbye`);
    return bye = true;
    console.log(`you can't see me`);
}

console.log(bye);

goodbye();
console.log(goodbye())
console.log(bye);

function sum(a, b) {
    return a + b;
}

console.log(sum(11,11));

// - ARROW FUNCTIONS -
// NOT arrow
function log(data) {
    console.log(data);
}
// ARROW
log = (data) => {
    console.log(data);
}

// OR
log = (data) => {console.log(data)};
log2 = data => console.log(data);

log("message1");
log2("message2");