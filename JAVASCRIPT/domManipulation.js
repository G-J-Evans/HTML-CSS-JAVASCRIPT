'use strict'

// ---- DOM ----

// Document Object Model
/* inside html
    Page
        -> HTML
            -> HEAD
                -> METADATA
            -> BODY
                -> HEADERS
                -> PARAGRAPHS
                -> DIVS
*/

import * as DOM from './dom.js';

let addToList = str => {
    let child = document.createElement(`li`);
    child.innerHTML = str;
    DOM.textOutput.appendChild(child);
}

DOM.textButton.onclick = () => addToList(DOM.textInput.value);