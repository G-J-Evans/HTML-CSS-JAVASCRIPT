`use strict`
import * as DOM from './dom.js';

let getX = () => {
    return new Number(DOM.inputOne.value);
}

let getY = () => {
    return new Number(DOM.inputTwo.value);
}

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

// Calculator
{
    let child;
    
    let displayAnswer = (x , y , z , operator) => {
    child = document.createElement(`li`);
    child.classList.add("list-group-item");
    child.innerHTML = `${x} ${operator} ${y} = ${z}`;
    }

    DOM.buttonEquals.onclick = () => {
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
}

// let reset = () => {
//     document.querySelector('#input_1').value = "0";
//     document.querySelector('#input_2').value = "0";
//     document.querySelector('#list_output').innerHTML = '';
// }

let reset = () => {
    let inputs = document.querySelectorAll('input');
    console.log(inputs);
    for (let input of inputs){
        input.value = '0';
    }
    document.getElementById('list_output').innerHTML = '';
}

DOM.buttonClear.onclick = () => {
    reset()
} 