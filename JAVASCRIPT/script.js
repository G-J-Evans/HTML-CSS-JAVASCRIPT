// USE STRICT and CONSOLE

// use strict:
// forces us to write 'secure' JavaScript
// stops us using protected words, accidentaly making global variables etc.

`use strict` // Would be line one

console.log(`Hello world!`);

console.info(`this is info`);

console.warn(`this is a warning`);

console.error(`this is an error message`);

// styling the console

console.log(`%c` + `some text`, `color:black; background-color:white; front-size 30px; padding: 15px;`);

console.log(`%c` + `red text` + `%c` + ` blue text`, `color:red;` , `color:blue`);