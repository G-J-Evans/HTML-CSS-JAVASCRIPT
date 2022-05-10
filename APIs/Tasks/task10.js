'use strict'
const input = document.querySelector('#input');
const readallbutton = document.querySelector('#readAll');
const readbyidbutton = document.querySelector('#readbyID');
const createbutton = document.querySelector('#create');
const loginbutton = document.querySelector('#login')
const output = document.querySelector('#output');
const registerbutton = document.querySelector('#register');
const clearbutton = document.querySelector('#clear');

let clear = () => {
    output.innerHTML = '';
}

let readAll = INTERFACE => {
    axios
        .get(INTERFACE)
        .then(response => {
            output.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err);
        })
}

let readByID = INTERFACE => {
    axios
        .get(INTERFACE)
        .then(response => {
            output.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err);
        })
}

let create = URL => {
    axios
        .post(URL, {
            name : "Morpheus",
            job : "Leader"
        })
        .then(response => {
            output.innerHTML = JSON.stringify(response);
        }).catch(err => {
            console.error(err);
        })
}

let register = URL => {
    axios
    .post(URL, {
        email : "eve.holt@reqres.in",
        password : "pistol"
    })
    .then(response => {
        output.innerHTML = JSON.stringify(response);
    }).catch(err => {
        console.error(err);
    })
}

let login = URL => {
    axios
    .post(URL, {
        email : "eve.holt@reqres.in",
        password : "cityslicka"
    })
    .then(response => {
        output.innerHTML = JSON.stringify(response);
    }).catch(err => {
        console.error(err);
    })
}

clearbutton.onclick = () => clear();
readallbutton.onclick = () => readAll("https://reqres.in/api/users?page=2");
readbyidbutton.onclick = () => readByID("https://reqres.in/api/users/2");
createbutton.onclick = () => create("https://reqres.in/api/users");
registerbutton.onclick = () => register("https://reqres.in/api/register");
loginbutton.onclick = () => login("https://reqres.in/api/login");