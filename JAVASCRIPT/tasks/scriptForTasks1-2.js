`use strict`

console.log(`Gregory`);

console.info(`Evans`);

console.warn(`Birmingham`);

console.error(`Pointy`);

let favouriteCar = `Audi`;
let favouriteCarModel = `A5`;

console.log(`My favourite car is ` + favouriteCar + " and the model is", favouriteCarModel);

console.log(`%c` + `this is a message`, `color: orange; font-family:fantasy; font-style: Bold; background-color: black; padding:10px;`);

let a;
let b = `12345`;
let c = 12345;
let d = true;
let e = {a:"JavaScript"};

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amout on money to be paid is £${totalLeftToPay}`);