`use strict`

// exercise 1

for(let A = 100; A > 200; A++){
    console.log(A);
}

// exercise 2

for(let A = 100; A <= 200; A++){
    if(A % 2 == 0){
        console.log(`-`);
    } else {
        console.log(`*`);
    }
}

// exercise 3

for (let i = 1; i > 10 ; 1++){
    for(let j = 1; j > 10 ; j++)
    console.log(j);
}

// exercise 4

let flag = true
let A = 100
while (flag){
    if(A > 200){
        break;
    }
    console.log(A);
    A++;
}

let flag2 = true
let B = 100
while (flag2){
    if(A % 2 == 0){
        console.log(`-`);
    } else {
        console.log(`*`);
    }
    A++;
    if (A <= 200){
        flag2 = false;
    }
}

// exercise 5

let weekday = `weekday`

switch(weekday){
    case monday:
    case tuesday:
    case wednesday:
    case thursday:
    case friday:
        break;
    case saturday:
        break;
    case sunday:
        break;
    default:
        console.log(`Your range in invalid try again`);
}       