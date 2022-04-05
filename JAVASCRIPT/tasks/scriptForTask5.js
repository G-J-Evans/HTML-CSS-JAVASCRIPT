let strictA = true;
let strictB = 1;

//exercise 1
console.log(strictA == strictB); // true
console.log(strictA === strictB); // false

//exercise 2
console.log(strictA != strictB); // false
console.log(strictA !== strictB); // true

//exercise 3
let age = 10;
age < 18 && age > 65 ? `between 18 and 65 inclusive` : `outside of 18 and 65`;

value;
if (age < 18){
    value = `underage`;
} else if (age > 65) {
    value = `older than 65`;
} else {
    value = `between 18 and 65 inclusive`;
}
console.log(value);

// exercise 4

value = (age > 50 ? `older than 50` : `50 or younger`);
console.log(value);


