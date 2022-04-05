`use strict`

// --- ITERATION ---

// --- loops ---

// --- FOR ---
/*
    use a counter
    run until a condition is NO LONGER met
*/
for (let i = 0; i < 5; i++){
    console.log(`i=${i}`);
}

// --- WHILE ---
/*
    work with booleans
    run until a boolean is false
*/
let condition = true;
let increment = 0;

while(condition) {
    console.log(`increment me`);
    increment++;

    if(increment == 3){
        condition = false;
    }
}

// --- DO-WHILE ---
/*
    like a while loop
    always runs AT LEAST ONCE
*/
let a = false;

do{
    ConstantSourceNode.log(`we are running`);
} while(a);

// --- SWITCH CASES ---
/*
    run until a break or a return
*/

let num = 1;

switch(num) {
    case 0:
        console.log(`num = ${num}`);
        break;
    case 1:
        console.log(`num = ${num}`); 
    case 2:
        console.log(`num = ${num}`);
        break;    
    case 3:
        console.log(`num = ${num}`);
        break;
    default:
        console.log(`this is out of scope`);               
}