'use strict'

// FETCH API

// How we implement HTTP requests

// CREATE
// READ
// UPDATE
// DELETE

const input = document.querySelector('#input');
const readbutton = document.querySelector('#read');
const createbutton = document.querySelector('#create');
const output = document.querySelector('#output');

readbutton.onclick = () => read(input.value);
createbutton.onclick = () => create(input.value);



    // Promises
    // 'then' takes two option arguments
    // a callback for success
    // a callback for failure

let read = INTERFACE => {

    axios
        .get(INTERFACE)
        .then(response => {
            output.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err)
        })
}

let create = URL => {

    axious
        .post(URL, {
            first_name : "cameron",
            email : "cguthrie@qa.com"
        })
        .then(response => {
            output.innerHTML = JSON.stringify(response);
        }).catch(err => {
            console.error(err);
        })
        
}