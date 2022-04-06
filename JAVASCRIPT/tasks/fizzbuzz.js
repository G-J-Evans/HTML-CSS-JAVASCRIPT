`use strict`

// for (i = 1; i < 101 ; i++){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log(`fizzbuzz`);
//     } else if(i % 3 == 0){
//         console.log(`fizz`);
//     } else if ( i % 5 == 0){
//         console.log(`buzz`);
//     } else {
//         console.log(`${i}`);
//     }
// }

// for (i = 1; i < 101 ; i++){
//     if (i % 3 == 0){
//         if(i % 5 == 0){
//             console.log(`fizzbuzz`);
//         } else {
//             console.log(`fizz`);
//         }
//     } else {
//         if(i % 5 == 0){
//             console.log(`buzz`);
//         } else {
//             console.log(`${i}`);
//         }
//     }    
// }



// for (i = 1; i < 101; i++){
//     i % 3 == 0 ?
//     (i % 5 == 0 ? console.log(`fizzbuzz`) :console.log(`fizz`)) :
//     (i % 5 == 0 ? console.log(`buzz`) : console.log(`${i}`));
// }


// for(i = 1; i < 101; i++) {
//     !i%3 ? !i%5 ? fizzbuzz() : fizz() : !i%5 ? buzz() : console.log(`$[i]`);
// }

function divisableExactlyByThree(x) {
    if(x % 3 == 0){
        return true;
    }
    return false;
}

function divisableExactlyByFive(x) {
    return !(x%5);
}

function fizz() {
    console.log(`fizz`);
}

function buzz(){
    console.log(`buzz`);
}

function fizzbuzz() {
    fizz();
    buzz();
}

for(i = 1; i < 101; i++) {
    !(i%3) ? !(i%5) ? fizzbuzz() : fizz() : !(i%5) ? buzz() : console.log(`${i}`);
}

for (i = 1; i < 101; i++) {
    divisableExactlyByThree(i) ?
    (divisableExactlyByFive(i) ?
        fizz():
        fizzbuzz()) :
    (divisableExactlyByFive(i) ?
        buzz() :
        console.log(`${i}`));
}

for (i = 1; i < 101; i++) {
    divisableExactlyByThree(i) ?
    divisableExactlyByFive(i) ?
        fizz() :
        fizzbuzz() :
    divisableExactlyByFive(i) ?
        buzz() :
        console.log(`${i}`);
}