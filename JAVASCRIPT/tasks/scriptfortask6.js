`use strict`

// exercise 1
let darthVader = {
    allegiance : `empire`,
    weapon : `lightsaber`,
    sith : true,
}
console.log(darthVader);

// exercise 2
console.log(darthVader.allegiance);
console.log(darthVader.weapon);
console.log(darthVader.sith);
console.log(!darthVader.sith);

// exercise 3
let myArray = [`hello`, `everyone`];
console.log(myArray.length);
myArray.push(`who` , `is`, `here`);
console.log(myArray.length);
myArray.shift;

for (let elem of myArray){
    console.log(elem);
}