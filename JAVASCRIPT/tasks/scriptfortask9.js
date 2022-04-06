'use strict'

import * as DOM from './domTask9.js';

function createHeader(){
    const header = document.createElement(`h1`);
    const text = DOM.headerInput.innerHTML;
    const headerText = document.createTextNode(text);
    header.appendChild(headerText);
    document.body.appendChild(header);
}

createHeader();