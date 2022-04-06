`use strict`
import * as DOM from './dom.js';

let add = (x, y) => {
   return x + y;
}

let subtract = (x, y) => {
    return x - y;
 }

 let multiply = (x, y) => {
    return x * y;
 }

let divide = (x, y) => {
    return x / y;
 }

let getX = () => {
    return DOM.inputOne.value;
}

let getY = () => {
    return DOM.inputTwo.value;
}

let displayAnswer = (x , y , z , operator) => {
    let child = document.createElement(`li`);
    child.classList.add("list-group-item");
    child.innerHTML = `${x} ${operator} ${y} = ${z}`;
    DOM.outputList.appendChild(child);
}

DOM.buttonAdd.onclick = () => {
    let x = getX();
    let y = getY();
    let z = add(x, y); 
    displayAnswer(x, y, z, '+');
}

DOM.buttonSubtract.onclick = () => {
    let x = getX();
    let y = getY();
    let z = subtract(x, y);
    displayAnswer(x, y, z, '-');
}

DOM.buttonMultiply.onclick = () => {
    let x = getX();
    let y = getY();
    let z = multiply(x, y);
    displayAnswer(x, y, z, '*');
}

DOM.buttonDivide.onclick = () => {
    let x = getX();
    let y = getY();
    let z = divide(x , y);
    displayAnswer(x, y, z, '/');
}

let reset = () => {
    document.querySelector('#input_1').value = "0";
    document.querySelector('#input_2').value = "0";
    document.querySelector('#list_output').innerHTML = '';
}

// let reset = () => {
//     let inputs = document.querySelectorAll('.form-control');
//     console.log(inputs);
//     for (let input of inputs){
//         input.value = '0';
//     }
//     document.getElementById('list_output').innerHTML = '';
// }

DOM.buttonClear.onclick = () => {
    reset()
} 